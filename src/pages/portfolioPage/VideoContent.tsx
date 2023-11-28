import {useEffect, useState} from 'react';

import {youtubeAPI} from '../../api/youtubeAPI.ts';

import {Modal} from '../../components/modal';

import {ScrollPropsType} from './PortfolioContent.tsx';
import {VideosContainerStyled, IframeContainer, VideoContainerStyled} from './PortfolioPage.styled.ts';
import {ItemType} from "../../api/youtubeAPI.types.ts";

export const VideoContent = ({isScroll = false}: ScrollPropsType) => {
    const [modalIsShow, setModalIsShow] = useState<boolean>(false);
    const [videos, setVideos] = useState<ItemType[]>([]);
    const [videoInModal, setVideoInModal] = useState<string>('');

    const openModal = (id: string) => {
        setModalIsShow(true);
        setVideoInModal(id);
        // videos.filter(video => video.id === id)[0].snippet.thumbnails.maxres.url;
    };

    const closeModal = () => {
        setModalIsShow(false);
        setVideoInModal('');
    };

    const getPlaylist = async () => {
        try {
            return await youtubeAPI.getPlaylist();
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPlaylist()
            .then(res => {
                if (res) setVideos(res.data.items.filter(video => video.snippet.title !== 'Deleted video' && video.snippet.title !== 'Private video'));
            });
    }, []);


    return (
        <VideosContainerStyled $isScroll={isScroll}>
            {videos.length && modalIsShow && <Modal closeModal={closeModal} modalActive={modalIsShow}>
                <IframeContainer $image={videos.filter(video => video.id === videoInModal)[0].snippet.thumbnails.maxres.url}>
                    <iframe
                        width='100%'
                        height='100%'
                        src={`https://www.youtube.com/embed/${videos.filter(video => video.id === videoInModal)[0].contentDetails.videoId}`}
                        title={videos.filter(video => video.id === videoInModal)[0].snippet.title}
                        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen
                    />
                    </IframeContainer>
            </Modal>}
            {videos.length
                ? videos.map(video =>
                    <VideoContainerStyled
                        key={video.id}
                        $image={video.snippet.thumbnails.standard?.url ? video.snippet.thumbnails.standard.url : ''}
                        onClick={() => openModal(video.id)}
                    />
                )
                : null
            }
        </VideosContainerStyled>
    );
};
