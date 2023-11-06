import {useState, MouseEvent} from 'react';
import {Modal} from '../../components/modal';

import bed1JPG from '../../assets/images/portfolio/modelling/bed1.jpg';
import bed1PNG from '../../assets/images/portfolio/modelling/bed1.png';
import bed1WEBP from '../../assets/images/portfolio/modelling/bed1.webp';
import bed2JPG from '../../assets/images/portfolio/modelling/bed2.jpg';
import bed2PNG from '../../assets/images/portfolio/modelling/bed2.png';
import bed2WEBP from '../../assets/images/portfolio/modelling/bed2.webp';
import pinkArmchairJPG from '../../assets/images/portfolio/modelling/pinkArmchair.jpg';
import pinkArmchairPNG from '../../assets/images/portfolio/modelling/pinkArmchair.png';
import pinkArmchairWEBP from '../../assets/images/portfolio/modelling/pinkArmchair.webp';
import azureArmchair1JPG from '../../assets/images/portfolio/modelling/azureArmchair1.jpg';
import azureArmchair1PNG from '../../assets/images/portfolio/modelling/azureArmchair1.png';
import azureArmchair1WEBP from '../../assets/images/portfolio/modelling/azureArmchair1.webp';
import azureArmchair2JPG from '../../assets/images/portfolio/modelling/azureArmchair2.jpg';
import azureArmchair2PNG from '../../assets/images/portfolio/modelling/azureArmchair2.png';
import azureArmchair2WEBP from '../../assets/images/portfolio/modelling/azureArmchair2.webp';
import redArmchair1JPG from '../../assets/images/portfolio/modelling/redArmchair1.jpg';
import redArmchair1PNG from '../../assets/images/portfolio/modelling/redArmchair1.png';
import redArmchair1WEBP from '../../assets/images/portfolio/modelling/redArmchair1.webp';
import redArmchair2JPG from '../../assets/images/portfolio/modelling/redArmchair2.jpg';
import redArmchair2PNG from '../../assets/images/portfolio/modelling/redArmchair2.png';
import redArmchair2WEBP from '../../assets/images/portfolio/modelling/redArmchair2.webp';
import redArmchair3JPG from '../../assets/images/portfolio/modelling/redArmchair3.jpg';
import redArmchair3PNG from '../../assets/images/portfolio/modelling/redArmchair3.png';
import redArmchair3WEBP from '../../assets/images/portfolio/modelling/redArmchair3.webp';
import bag1JPG from '../../assets/images/portfolio/modelling/bag1.jpg';
import bag1PNG from '../../assets/images/portfolio/modelling/bag1.png';
import bag1WEBP from '../../assets/images/portfolio/modelling/bag1.webp';
import bag2JPG from '../../assets/images/portfolio/modelling/bag2.jpg';
import bag2PNG from '../../assets/images/portfolio/modelling/bag2.png';
import bag2WEBP from '../../assets/images/portfolio/modelling/bag2.webp';
import blackBackpack1JPG from '../../assets/images/portfolio/modelling/blackBackpack1.jpg';
import blackBackpack1PNG from '../../assets/images/portfolio/modelling/blackBackpack1.png';
import blackBackpack1WEBP from '../../assets/images/portfolio/modelling/blackBackpack1.webp';
import blackBackpack2JPG from '../../assets/images/portfolio/modelling/blackBackpack2.jpg';
import blackBackpack2PNG from '../../assets/images/portfolio/modelling/blackBackpack2.png';
import blackBackpack2WEBP from '../../assets/images/portfolio/modelling/blackBackpack2.webp';
import blackBackpack3JPG from '../../assets/images/portfolio/modelling/blackBackpack3.jpg';
import blackBackpack3PNG from '../../assets/images/portfolio/modelling/blackBackpack3.png';
import blackBackpack3WEBP from '../../assets/images/portfolio/modelling/blackBackpack3.webp';
import bag3JPG from '../../assets/images/portfolio/modelling/bag3.jpg';
import bag3PNG from '../../assets/images/portfolio/modelling/bag3.png';
import bag3WEBP from '../../assets/images/portfolio/modelling/bag3.webp';
import clutch1JPG from '../../assets/images/portfolio/modelling/clutch1.jpg';
import clutch1PNG from '../../assets/images/portfolio/modelling/clutch1.png';
import clutch1WEBP from '../../assets/images/portfolio/modelling/clutch1.webp';
import wickerBackpack1JPG from '../../assets/images/portfolio/modelling/wickerBackpack1.jpg';
import wickerBackpack1PNG from '../../assets/images/portfolio/modelling/wickerBackpack1.png';
import wickerBackpack1WEBP from '../../assets/images/portfolio/modelling/wickerBackpack1.webp';
import wickerBackpack2JPG from '../../assets/images/portfolio/modelling/wickerBackpack2.jpg';
import wickerBackpack2PNG from '../../assets/images/portfolio/modelling/wickerBackpack2.png';
import wickerBackpack2WEBP from '../../assets/images/portfolio/modelling/wickerBackpack2.webp';
import wickerBackpack3JPG from '../../assets/images/portfolio/modelling/wickerBackpack3.jpg';
import wickerBackpack3PNG from '../../assets/images/portfolio/modelling/wickerBackpack3.png';
import wickerBackpack3WEBP from '../../assets/images/portfolio/modelling/wickerBackpack3.webp';
import greyArmchair1JPG from '../../assets/images/portfolio/modelling/greyArmchair1.jpg';
import greyArmchair1PNG from '../../assets/images/portfolio/modelling/greyArmchair1.png';
import greyArmchair1WEBP from '../../assets/images/portfolio/modelling/greyArmchair1.webp';
import greyArmchair2JPG from '../../assets/images/portfolio/modelling/greyArmchair2.jpg';
import greyArmchair2PNG from '../../assets/images/portfolio/modelling/greyArmchair2.png';
import greyArmchair2WEBP from '../../assets/images/portfolio/modelling/greyArmchair2.webp';
import blackSofaJPG from '../../assets/images/portfolio/modelling/blackSofa.jpg';
import blackSofaPNG from '../../assets/images/portfolio/modelling/blackSofa.png';
import blackSofaWEBP from '../../assets/images/portfolio/modelling/blackSofa.webp';
import yellowOttomanJPG from '../../assets/images/portfolio/modelling/yellowOttoman.jpg';
import yellowOttomanPNG from '../../assets/images/portfolio/modelling/yellowOttoman.png';
import yellowOttomanWEBP from '../../assets/images/portfolio/modelling/yellowOttoman.webp';
import greyOttomanJPG from '../../assets/images/portfolio/modelling/greyOttoman.jpg';
import greyOttomanPNG from '../../assets/images/portfolio/modelling/greyOttoman.png';
import greyOttomanWEBP from '../../assets/images/portfolio/modelling/greyOttoman.webp';
import headphones1JPG from '../../assets/images/portfolio/modelling/headphones1.jpg';
import headphones1PNG from '../../assets/images/portfolio/modelling/headphones1.png';
import headphones1WEBP from '../../assets/images/portfolio/modelling/headphones1.webp';
import headphones2JPG from '../../assets/images/portfolio/modelling/headphones2.jpg';
import headphones2PNG from '../../assets/images/portfolio/modelling/headphones2.png';
import headphones2WEBP from '../../assets/images/portfolio/modelling/headphones2.webp';
import table1JPG from '../../assets/images/portfolio/modelling/table1.jpg';
import table1PNG from '../../assets/images/portfolio/modelling/table1.png';
import table1WEBP from '../../assets/images/portfolio/modelling/table1.webp';
import table2JPG from '../../assets/images/portfolio/modelling/table2.jpg';
import table2PNG from '../../assets/images/portfolio/modelling/table2.png';
import table2WEBP from '../../assets/images/portfolio/modelling/table2.webp';
import table3JPG from '../../assets/images/portfolio/modelling/table3.jpg';
import table3PNG from '../../assets/images/portfolio/modelling/table3.png';
import table3WEBP from '../../assets/images/portfolio/modelling/table3.webp';
import table4JPG from '../../assets/images/portfolio/modelling/table4.jpg';
import table4PNG from '../../assets/images/portfolio/modelling/table4.png';
import table4WEBP from '../../assets/images/portfolio/modelling/table4.webp';
import colorOttomansJPG from '../../assets/images/portfolio/modelling/colorOttomans.jpg';
import colorOttomansPNG from '../../assets/images/portfolio/modelling/colorOttomans.png';
import colorOttomansWEBP from '../../assets/images/portfolio/modelling/colorOttomans.webp';
import tvStand1JPG from '../../assets/images/portfolio/modelling/tvstand1.jpg';
import tvStand1PNG from '../../assets/images/portfolio/modelling/tvstand1.png';
import tvStand1WEBP from '../../assets/images/portfolio/modelling/tvstand1.webp';
import tvStand2JPG from '../../assets/images/portfolio/modelling/tvstand2.jpg';
import tvStand2PNG from '../../assets/images/portfolio/modelling/tvstand2.png';
import tvStand2WEBP from '../../assets/images/portfolio/modelling/tvstand2.webp';
import tvStand3JPG from '../../assets/images/portfolio/modelling/tvstand3.jpg';
import tvStand3PNG from '../../assets/images/portfolio/modelling/tvstand3.png';
import tvStand3WEBP from '../../assets/images/portfolio/modelling/tvstand3.webp';
import recordPlayer1JPG from '../../assets/images/portfolio/modelling/recordplayer1.jpg';
import recordPlayer1PNG from '../../assets/images/portfolio/modelling/recordplayer1.png';
import recordPlayer1WEBP from '../../assets/images/portfolio/modelling/recordplayer1.webp';
import recordPlayer2JPG from '../../assets/images/portfolio/modelling/recordplayer2.jpg';
import recordPlayer2PNG from '../../assets/images/portfolio/modelling/recordplayer2.png';
import recordPlayer2WEBP from '../../assets/images/portfolio/modelling/recordplayer2.webp';
import orangeArmchair1JPG from '../../assets/images/portfolio/modelling/orangeArmchair1.jpg';
import orangeArmchair1PNG from '../../assets/images/portfolio/modelling/orangeArmchair1.png';
import orangeArmchair1WEBP from '../../assets/images/portfolio/modelling/orangeArmchair1.webp';
import orangeArmchair2JPG from '../../assets/images/portfolio/modelling/orangeArmchair2.jpg';
import orangeArmchair2PNG from '../../assets/images/portfolio/modelling/orangeArmchair2.png';
import orangeArmchair2WEBP from '../../assets/images/portfolio/modelling/orangeArmchair2.webp';
import orangeArmchair3JPG from '../../assets/images/portfolio/modelling/orangeArmchair3.jpg';
import orangeArmchair3PNG from '../../assets/images/portfolio/modelling/orangeArmchair3.png';
import orangeArmchair3WEBP from '../../assets/images/portfolio/modelling/orangeArmchair3.webp';
import orangeArmchair4JPG from '../../assets/images/portfolio/modelling/orangeArmchair4.jpg';
import orangeArmchair4PNG from '../../assets/images/portfolio/modelling/orangeArmchair4.png';
import orangeArmchair4WEBP from '../../assets/images/portfolio/modelling/orangeArmchair4.webp';
import inverterJPG from '../../assets/images/portfolio/modelling/inverter.jpg';
import inverterPNG from '../../assets/images/portfolio/modelling/inverter.png';
import inverterWEBP from '../../assets/images/portfolio/modelling/inverter.webp';

import {ScrollPropsType} from './PortfolioContent.tsx';
import {
    ModellingContentContainerStyled,
    BackArrowStyled,
    BigImageStyled,
    ForwardArrowStyled,
    ImageStyled,
} from './PortfolioPage.styled.ts';

export const ModellingContent = ({isScroll = false}: ScrollPropsType) => {
    const [modalIsShow, setModalIsShow] = useState<boolean>(false);
    const [imageInModal, setImageInModal] = useState<number>(0);

    const openModal = (id: number) => {
        setModalIsShow(true);
        setImageInModal(id);
    };

    const closeModal = () => {
        setModalIsShow(false);
        setImageInModal(0);
    };

    const content = [
        {
            id: 1,
            imageJPG: bed1JPG,
            imagePNG: bed1PNG,
            imageWEBP: bed1WEBP,
        },
        {
            id: 2,
            imageJPG: bed2JPG,
            imagePNG: bed2PNG,
            imageWEBP: bed2WEBP,
        },
        {
            id: 3,
            imageJPG: pinkArmchairJPG,
            imagePNG: pinkArmchairPNG,
            imageWEBP: pinkArmchairWEBP,
        },
        {
            id: 4,
            imageJPG: azureArmchair1JPG,
            imagePNG: azureArmchair1PNG,
            imageWEBP: azureArmchair1WEBP,
        },
        {
            id: 5,
            imageJPG: azureArmchair2JPG,
            imagePNG: azureArmchair2PNG,
            imageWEBP: azureArmchair2WEBP,
        },
        {
            id: 6,
            imageJPG: redArmchair1JPG,
            imagePNG: redArmchair1PNG,
            imageWEBP: redArmchair1WEBP,
        },
        {
            id: 7,
            imageJPG: redArmchair2JPG,
            imagePNG: redArmchair2PNG,
            imageWEBP: redArmchair2WEBP,
        },
        {
            id: 8,
            imageJPG: redArmchair3JPG,
            imagePNG: redArmchair3PNG,
            imageWEBP: redArmchair3WEBP,
        },
        {
            id: 9,
            imageJPG: bag1JPG,
            imagePNG: bag1PNG,
            imageWEBP: bag1WEBP,
        },
        {
            id: 10,
            imageJPG: bag2JPG,
            imagePNG: bag2PNG,
            imageWEBP: bag2WEBP,
        },
        {
            id: 11,
            imageJPG: blackBackpack1JPG,
            imagePNG: blackBackpack1PNG,
            imageWEBP: blackBackpack1WEBP,
        },
        {
            id: 12,
            imageJPG: blackBackpack2JPG,
            imagePNG: blackBackpack2PNG,
            imageWEBP: blackBackpack2WEBP,
        },
        {
            id: 13,
            imageJPG: blackBackpack3JPG,
            imagePNG: blackBackpack3PNG,
            imageWEBP: blackBackpack3WEBP,
        },
        {
            id: 14,
            imageJPG: bag3JPG,
            imagePNG: bag3PNG,
            imageWEBP: bag3WEBP,
        },
        {
            id: 15,
            imageJPG: clutch1JPG,
            imagePNG: clutch1PNG,
            imageWEBP: clutch1WEBP,
        },
        {
            id: 16,
            imageJPG: wickerBackpack1JPG,
            imagePNG: wickerBackpack1PNG,
            imageWEBP: wickerBackpack1WEBP,
        },
        {
            id: 17,
            imageJPG: wickerBackpack2JPG,
            imagePNG: wickerBackpack2PNG,
            imageWEBP: wickerBackpack2WEBP,
        },
        {
            id: 18,
            imageJPG: wickerBackpack3JPG,
            imagePNG: wickerBackpack3PNG,
            imageWEBP: wickerBackpack3WEBP,
        },
        {
            id: 19,
            imageJPG: greyArmchair1JPG,
            imagePNG: greyArmchair1PNG,
            imageWEBP: greyArmchair1WEBP,
        },
        {
            id: 20,
            imageJPG: greyArmchair2JPG,
            imagePNG: greyArmchair2PNG,
            imageWEBP: greyArmchair2WEBP,
        },
        {
            id: 21,
            imageJPG: blackSofaJPG,
            imagePNG: blackSofaPNG,
            imageWEBP: blackSofaWEBP,
        },
        {
            id: 22,
            imageJPG: yellowOttomanJPG,
            imagePNG: yellowOttomanPNG,
            imageWEBP: yellowOttomanWEBP,
        },
        {
            id: 23,
            imageJPG: greyOttomanJPG,
            imagePNG: greyOttomanPNG,
            imageWEBP: greyOttomanWEBP,
        },
        {
            id: 24,
            imageJPG: headphones1JPG,
            imagePNG: headphones1PNG,
            imageWEBP: headphones1WEBP,
        },
        {
            id: 25,
            imageJPG: headphones2JPG,
            imagePNG: headphones2PNG,
            imageWEBP: headphones2WEBP,
        },
        {
            id: 26,
            imageJPG: table1JPG,
            imagePNG: table1PNG,
            imageWEBP: table1WEBP,
        },
        {
            id: 27,
            imageJPG: table2JPG,
            imagePNG: table2PNG,
            imageWEBP: table2WEBP,
        },
        {
            id: 28,
            imageJPG: table3JPG,
            imagePNG: table3PNG,
            imageWEBP: table3WEBP,
        },
        {
            id: 29,
            imageJPG: table4JPG,
            imagePNG: table4PNG,
            imageWEBP: table4WEBP,
        },
        {
            id: 30,
            imageJPG: colorOttomansJPG,
            imagePNG: colorOttomansPNG,
            imageWEBP: colorOttomansWEBP,
        },
        {
            id: 31,
            imageJPG: tvStand1JPG,
            imagePNG: tvStand1PNG,
            imageWEBP: tvStand1WEBP,
        },
        {
            id: 32,
            imageJPG: tvStand2JPG,
            imagePNG: tvStand2PNG,
            imageWEBP: tvStand2WEBP,
        },
        {
            id: 33,
            imageJPG: tvStand3JPG,
            imagePNG: tvStand3PNG,
            imageWEBP: tvStand3WEBP,
        },

        {
            id: 34,
            imageJPG: recordPlayer1JPG,
            imagePNG: recordPlayer1PNG,
            imageWEBP: recordPlayer1WEBP,
        },
        {
            id: 35,
            imageJPG: recordPlayer2JPG,
            imagePNG: recordPlayer2PNG,
            imageWEBP: recordPlayer2WEBP,
        },
        {
            id: 36,
            imageJPG: orangeArmchair1JPG,
            imagePNG: orangeArmchair1PNG,
            imageWEBP: orangeArmchair1WEBP,
        },
        {
            id: 37,
            imageJPG: orangeArmchair2JPG,
            imagePNG: orangeArmchair2PNG,
            imageWEBP: orangeArmchair2WEBP,
        },
        {
            id: 38,
            imageJPG: orangeArmchair3JPG,
            imagePNG: orangeArmchair3PNG,
            imageWEBP: orangeArmchair3WEBP,
        },
        {
            id: 39,
            imageJPG: orangeArmchair4JPG,
            imagePNG: orangeArmchair4PNG,
            imageWEBP: orangeArmchair4WEBP,
        },
        {
            id: 40,
            imageJPG: inverterJPG,
            imagePNG: inverterPNG,
            imageWEBP: inverterWEBP,
        },
    ];

    const prevImage = (e: MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();
        if (imageInModal === 1) {
            setImageInModal(content.length);

        } else {
            console.log('-1');
            setImageInModal(prev => prev - 1);
        }
    }

    const nextImage = (e: MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();
        if (imageInModal === content.length) {
            setImageInModal(1);
            console.log('first');
        } else {
            setImageInModal(prev => prev + 1);
            console.log('+1');
        }
    }

    return (
        <ModellingContentContainerStyled $isScroll={isScroll}>
            {modalIsShow && <Modal closeModal={closeModal} modalActive={modalIsShow}>
                <BackArrowStyled fontSize={'large'} onClick={(e) => prevImage(e)} />
                <picture>
                    <source type={'image/webp'} srcSet={content.filter(pic => pic.id === imageInModal)[0].imageWEBP}/>
                    <source type={'image/png'} srcSet={content.filter(pic => pic.id === imageInModal)[0].imagePNG}/>
                    <BigImageStyled src={content.filter(pic => pic.id === imageInModal)[0].imageJPG}/>
                </picture>
                <ForwardArrowStyled fontSize={'large'} onClick={(e) => nextImage(e)} />
            </Modal>}
            {content.map(pic =>
                <ImageStyled
                    key={pic.id}
                    jpg={pic.imageJPG}
                    png={pic.imagePNG}
                    webp={pic.imageWEBP}
                    onClick={() => openModal(pic.id)}
                />
            )}
        </ModellingContentContainerStyled>
    );
};
