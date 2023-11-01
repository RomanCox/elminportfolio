import {useEffect, useState} from 'react';

import {youtubeAPI} from '../../api/youtubeAPI.ts';

import {Modal} from '../../components/modal';

import {ScrollPropsType} from './PortfolioContent.tsx';
import {VideoContainerStyled, VideosContainerStyled,} from './PortfolioPage.styled.ts';

interface VideoContentDetailsType {
    videoId: string;
    videoPublishedAt: string;
}

interface ThumbnailType {
    width: number;
    height: number;
    url: string;
}

interface ThumbnailsType {
    default: ThumbnailType;
    high: ThumbnailType;
    maxRes: ThumbnailType;
    medium: ThumbnailType;
    standard: ThumbnailType;
}

interface VideoSnippetType {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: { kind: string, videoId: string };
    thumbnails: ThumbnailsType;
    title: string;
    videoOwnerChannelId: string;
    videoOwnerChannelTitle: string;
}

export interface VideoContextType {
    id: string;
    chapter: string;
    contentDetails: VideoContentDetailsType;
    snippet: VideoSnippetType;
}



export const VideoContent = ({isScroll = false}: ScrollPropsType) => {
    const [modalIsShow, setModalIsShow] = useState<boolean>(false);
    const [videos, setVideos] = useState<VideoContextType[]>([]);
    const [videoInModal, setVideoInModal] = useState<string>('');

    const openModal = (id: string) => {
        setModalIsShow(true);
        setVideoInModal(id);
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
                if (res) setVideos(res.data.items);
            });
    }, []);

    return (
        <VideosContainerStyled isScroll={isScroll}>
            {videos.length && modalIsShow && <Modal closeModal={closeModal} modalActive={modalIsShow}>
                <iframe
                    width='560' height='315'
                    src={`https://www.youtube.com/embed/${videos.filter(video => video.id === videoInModal)[0].contentDetails.videoId}`}
                    title={videos.filter(video => video.id === videoInModal)[0].snippet.title}
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                />
            </Modal>}
            {videos.length
                ? videos.map(video =>
                    <VideoContainerStyled
                        key={video.id}
                        $image={video.snippet.thumbnails.standard?.url ? video.snippet.thumbnails.standard.url : ''}
                        $width={video.snippet.thumbnails.standard?.width ? video.snippet.thumbnails.standard.width : 0}
                        $height={video.snippet.thumbnails.high?.height ? video.snippet.thumbnails.high.height : 0}
                        onClick={() => openModal(video.id)}
                    />
                )
                : null
            }
        </VideosContainerStyled>
    );
};
