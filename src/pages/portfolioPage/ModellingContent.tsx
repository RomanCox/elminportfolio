import {MouseEvent, useState} from 'react';
import {Modal} from '../../components/modal';

import bed1JPG from '../../assets/images/portfolio/modelling/bed1.jpg';
import bed1PNG from '../../assets/images/portfolio/modelling/bed1.png';
import bed1WEBP from '../../assets/images/portfolio/modelling/bed1.webp';
import bed2PreviewJPG from '../../assets/images/portfolio/modelling/bed2_preview.jpg';
import bed2PreviewPNG from '../../assets/images/portfolio/modelling/bed2_preview.png';
import bed2PreviewWEBP from '../../assets/images/portfolio/modelling/bed2_preview.webp';
import bed2JPG from '../../assets/images/portfolio/modelling/bed2.jpg';
import bed2PNG from '../../assets/images/portfolio/modelling/bed2.png';
import bed2WEBP from '../../assets/images/portfolio/modelling/bed2.webp';
import pinkArmchairJPG from '../../assets/images/portfolio/modelling/pinkArmchair.jpg';
import pinkArmchairPNG from '../../assets/images/portfolio/modelling/pinkArmchair.png';
import pinkArmchairWEBP from '../../assets/images/portfolio/modelling/pinkArmchair.webp';
import azureArmchair1JPG from '../../assets/images/portfolio/modelling/azureArmchair1.jpg';
import azureArmchair1PNG from '../../assets/images/portfolio/modelling/azureArmchair1.png';
import azureArmchair1WEBP from '../../assets/images/portfolio/modelling/azureArmchair1.webp';
import azureArmchair2PreviewJPG from '../../assets/images/portfolio/modelling/azureArmchair2_preview.jpg';
import azureArmchair2PreviewPNG from '../../assets/images/portfolio/modelling/azureArmchair2_preview.png';
import azureArmchair2PreviewWEBP from '../../assets/images/portfolio/modelling/azureArmchair2_preview.webp';
import azureArmchair2JPG from '../../assets/images/portfolio/modelling/azureArmchair2.jpg';
import azureArmchair2PNG from '../../assets/images/portfolio/modelling/azureArmchair2.png';
import azureArmchair2WEBP from '../../assets/images/portfolio/modelling/azureArmchair2.webp';
import redArmchair1JPG from '../../assets/images/portfolio/modelling/redArmchair1.jpg';
import redArmchair1PNG from '../../assets/images/portfolio/modelling/redArmchair1.png';
import redArmchair1WEBP from '../../assets/images/portfolio/modelling/redArmchair1.webp';
import redArmchair2PreviewJPG from '../../assets/images/portfolio/modelling/redArmchair2_preview.jpg';
import redArmchair2PreviewPNG from '../../assets/images/portfolio/modelling/redArmchair2_preview.png';
import redArmchair2PreviewWEBP from '../../assets/images/portfolio/modelling/redArmchair2_preview.webp';
import redArmchair2JPG from '../../assets/images/portfolio/modelling/redArmchair2.jpg';
import redArmchair2PNG from '../../assets/images/portfolio/modelling/redArmchair2.png';
import redArmchair2WEBP from '../../assets/images/portfolio/modelling/redArmchair2.webp';
import redArmchair3PreviewJPG from '../../assets/images/portfolio/modelling/redArmchair3_preview.jpg';
import redArmchair3PreviewPNG from '../../assets/images/portfolio/modelling/redArmchair3_preview.png';
import redArmchair3PreviewWEBP from '../../assets/images/portfolio/modelling/redArmchair3_preview.webp';
import redArmchair3JPG from '../../assets/images/portfolio/modelling/redArmchair3.jpg';
import redArmchair3PNG from '../../assets/images/portfolio/modelling/redArmchair3.png';
import redArmchair3WEBP from '../../assets/images/portfolio/modelling/redArmchair3.webp';
import bag1JPG from '../../assets/images/portfolio/modelling/bag1.jpg';
import bag1PNG from '../../assets/images/portfolio/modelling/bag1.png';
import bag1WEBP from '../../assets/images/portfolio/modelling/bag1.webp';
import bag2PreviewJPG from '../../assets/images/portfolio/modelling/bag2_preview.jpg';
import bag2PreviewPNG from '../../assets/images/portfolio/modelling/bag2_preview.png';
import bag2PreviewWEBP from '../../assets/images/portfolio/modelling/bag2_preview.webp';
import bag2JPG from '../../assets/images/portfolio/modelling/bag2.jpg';
import bag2PNG from '../../assets/images/portfolio/modelling/bag2.png';
import bag2WEBP from '../../assets/images/portfolio/modelling/bag2.webp';
import blackBackpack1JPG from '../../assets/images/portfolio/modelling/blackBackpack1.jpg';
import blackBackpack1PNG from '../../assets/images/portfolio/modelling/blackBackpack1.png';
import blackBackpack1WEBP from '../../assets/images/portfolio/modelling/blackBackpack1.webp';
import blackBackpack2PreviewJPG from '../../assets/images/portfolio/modelling/blackBackpack2_preview.jpg';
import blackBackpack2PreviewPNG from '../../assets/images/portfolio/modelling/blackBackpack2_preview.png';
import blackBackpack2PreviewWEBP from '../../assets/images/portfolio/modelling/blackBackpack2_preview.webp';
import blackBackpack2JPG from '../../assets/images/portfolio/modelling/blackBackpack2.jpg';
import blackBackpack2PNG from '../../assets/images/portfolio/modelling/blackBackpack2.png';
import blackBackpack2WEBP from '../../assets/images/portfolio/modelling/blackBackpack2.webp';
import blackBackpack3JPG from '../../assets/images/portfolio/modelling/blackBackpack3.jpg';
import blackBackpack3PNG from '../../assets/images/portfolio/modelling/blackBackpack3.png';
import blackBackpack3WEBP from '../../assets/images/portfolio/modelling/blackBackpack3.webp';
import bag3JPG from '../../assets/images/portfolio/modelling/bag3.jpg';
import bag3PNG from '../../assets/images/portfolio/modelling/bag3.png';
import bag3WEBP from '../../assets/images/portfolio/modelling/bag3.webp';
import clutch1PreviewJPG from '../../assets/images/portfolio/modelling/clutch1_preview.jpg';
import clutch1PreviewPNG from '../../assets/images/portfolio/modelling/clutch1_preview.png';
import clutch1PreviewWEBP from '../../assets/images/portfolio/modelling/clutch1_preview.webp';
import clutch1JPG from '../../assets/images/portfolio/modelling/clutch1.jpg';
import clutch1PNG from '../../assets/images/portfolio/modelling/clutch1.png';
import clutch1WEBP from '../../assets/images/portfolio/modelling/clutch1.webp';
import wickerBackpack1JPG from '../../assets/images/portfolio/modelling/wickerBackpack1.jpg';
import wickerBackpack1PNG from '../../assets/images/portfolio/modelling/wickerBackpack1.png';
import wickerBackpack1WEBP from '../../assets/images/portfolio/modelling/wickerBackpack1.webp';
import wickerBackpack2PreviewJPG from '../../assets/images/portfolio/modelling/wickerBackpack2_preview.jpg';
import wickerBackpack2PreviewPNG from '../../assets/images/portfolio/modelling/wickerBackpack2_preview.png';
import wickerBackpack2PreviewWEBP from '../../assets/images/portfolio/modelling/wickerBackpack2_preview.webp';
import wickerBackpack2JPG from '../../assets/images/portfolio/modelling/wickerBackpack2.jpg';
import wickerBackpack2PNG from '../../assets/images/portfolio/modelling/wickerBackpack2.png';
import wickerBackpack2WEBP from '../../assets/images/portfolio/modelling/wickerBackpack2.webp';
import wickerBackpack3JPG from '../../assets/images/portfolio/modelling/wickerBackpack3.jpg';
import wickerBackpack3PNG from '../../assets/images/portfolio/modelling/wickerBackpack3.png';
import wickerBackpack3WEBP from '../../assets/images/portfolio/modelling/wickerBackpack3.webp';
import greyArmchair1JPG from '../../assets/images/portfolio/modelling/greyArmchair1.jpg';
import greyArmchair1PNG from '../../assets/images/portfolio/modelling/greyArmchair1.png';
import greyArmchair1WEBP from '../../assets/images/portfolio/modelling/greyArmchair1.webp';
import greyArmchair2PreviewJPG from '../../assets/images/portfolio/modelling/greyArmchair2_preview.jpg';
import greyArmchair2PreviewPNG from '../../assets/images/portfolio/modelling/greyArmchair2_preview.png';
import greyArmchair2PreviewWEBP from '../../assets/images/portfolio/modelling/greyArmchair2_preview.webp';
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
import colorOttomansPreviewJPG from '../../assets/images/portfolio/modelling/colorOttomans_preview.jpg';
import colorOttomansPreviewPNG from '../../assets/images/portfolio/modelling/colorOttomans_preview.png';
import colorOttomansPreviewWEBP from '../../assets/images/portfolio/modelling/colorOttomans_preview.webp';
import colorOttomansJPG from '../../assets/images/portfolio/modelling/colorOttomans.jpg';
import colorOttomansPNG from '../../assets/images/portfolio/modelling/colorOttomans.png';
import colorOttomansWEBP from '../../assets/images/portfolio/modelling/colorOttomans.webp';
import tvStand1PreviewJPG from '../../assets/images/portfolio/modelling/tvstand1_preview.jpg';
import tvStand1PreviewPNG from '../../assets/images/portfolio/modelling/tvstand1_preview.png';
import tvStand1PreviewWEBP from '../../assets/images/portfolio/modelling/tvstand1_preview.webp';
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
    BackArrowStyled,
    BigImageStyled,
    ForwardArrowStyled,
    ImageStyled,
    ModellingContentContainerStyled, NavigationItemStyled,
} from './PortfolioPage.styled.ts';

export const ModellingContent = ({isMobile, isScroll = false, }: ScrollPropsType) => {
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
            imagePreviewJPG: bed1JPG,
            imagePreviewPNG: bed1PNG,
            imagePreviewWEBP: bed1WEBP,
            imageJPG: bed1JPG,
            imagePNG: bed1PNG,
            imageWEBP: bed1WEBP,
            position: 'center right',
        },
        {
            id: 2,
            imagePreviewJPG: bed2PreviewJPG,
            imagePreviewPNG: bed2PreviewPNG,
            imagePreviewWEBP: bed2PreviewWEBP,
            imageJPG: bed2JPG,
            imagePNG: bed2PNG,
            imageWEBP: bed2WEBP,
            position: 'center left',
        },
        {
            id: 3,
            imagePreviewJPG: pinkArmchairJPG,
            imagePreviewPNG: pinkArmchairPNG,
            imagePreviewWEBP: pinkArmchairWEBP,
            imageJPG: pinkArmchairJPG,
            imagePNG: pinkArmchairPNG,
            imageWEBP: pinkArmchairWEBP,
            position: 'center left',
        },
        {
            id: 4,
            imagePreviewJPG: azureArmchair1JPG,
            imagePreviewPNG: azureArmchair1PNG,
            imagePreviewWEBP: bed1WEBP,
            imageJPG: azureArmchair1JPG,
            imagePNG: azureArmchair1PNG,
            imageWEBP: azureArmchair1WEBP,
            position: 'center left',
        },
        {
            id: 5,
            imagePreviewJPG: azureArmchair2PreviewJPG,
            imagePreviewPNG: azureArmchair2PreviewPNG,
            imagePreviewWEBP: azureArmchair2PreviewWEBP,
            imageJPG: azureArmchair2JPG,
            imagePNG: azureArmchair2PNG,
            imageWEBP: azureArmchair2WEBP,
            position: 'center',
        },
        {
            id: 6,
            imagePreviewJPG: redArmchair1JPG,
            imagePreviewPNG: redArmchair1PNG,
            imagePreviewWEBP: redArmchair1WEBP,
            imageJPG: redArmchair1JPG,
            imagePNG: redArmchair1PNG,
            imageWEBP: redArmchair1WEBP,
            position: 'center',
        },
        {
            id: 7,
            imagePreviewJPG: redArmchair2PreviewJPG,
            imagePreviewPNG: redArmchair2PreviewPNG,
            imagePreviewWEBP: redArmchair2PreviewWEBP,
            imageJPG: redArmchair2JPG,
            imagePNG: redArmchair2PNG,
            imageWEBP: redArmchair2WEBP,
            position: 'center',
        },
        {
            id: 8,
            imagePreviewJPG: redArmchair3PreviewJPG,
            imagePreviewPNG: redArmchair3PreviewPNG,
            imagePreviewWEBP: redArmchair3PreviewWEBP,
            imageJPG: redArmchair3JPG,
            imagePNG: redArmchair3PNG,
            imageWEBP: redArmchair3WEBP,
            position: 'center',
        },
        {
            id: 9,
            imagePreviewJPG: bag1JPG,
            imagePreviewPNG: bag1PNG,
            imagePreviewWEBP: bag1WEBP,
            imageJPG: bag1JPG,
            imagePNG: bag1PNG,
            imageWEBP: bag1WEBP,
            position: 'center',
        },
        {
            id: 10,
            imagePreviewJPG: bag2PreviewJPG,
            imagePreviewPNG: bag2PreviewPNG,
            imagePreviewWEBP: bag2PreviewWEBP,
            imageJPG: bag2JPG,
            imagePNG: bag2PNG,
            imageWEBP: bag2WEBP,
            position: 'center',
        },
        {
            id: 11,
            imagePreviewJPG: blackBackpack1JPG,
            imagePreviewPNG: blackBackpack1PNG,
            imagePreviewWEBP: blackBackpack1WEBP,
            imageJPG: blackBackpack1JPG,
            imagePNG: blackBackpack1PNG,
            imageWEBP: blackBackpack1WEBP,
            position: 'center',
        },
        {
            id: 12,
            imagePreviewJPG: blackBackpack2PreviewJPG,
            imagePreviewPNG: blackBackpack2PreviewPNG,
            imagePreviewWEBP: blackBackpack2PreviewWEBP,
            imageJPG: blackBackpack2JPG,
            imagePNG: blackBackpack2PNG,
            imageWEBP: blackBackpack2WEBP,
            position: 'center left',
        },
        {
            id: 13,
            imagePreviewJPG: blackBackpack3JPG,
            imagePreviewPNG: blackBackpack3PNG,
            imagePreviewWEBP: blackBackpack3WEBP,
            imageJPG: blackBackpack3JPG,
            imagePNG: blackBackpack3PNG,
            imageWEBP: blackBackpack3WEBP,
            position: 'center',
        },
        {
            id: 14,
            imagePreviewJPG: bag3JPG,
            imagePreviewPNG: bag3PNG,
            imagePreviewWEBP: bag3WEBP,
            imageJPG: bag3JPG,
            imagePNG: bag3PNG,
            imageWEBP: bag3WEBP,
            position: 'center',
        },
        {
            id: 15,
            imagePreviewJPG: clutch1PreviewJPG,
            imagePreviewPNG: clutch1PreviewPNG,
            imagePreviewWEBP: clutch1PreviewWEBP,
            imageJPG: clutch1JPG,
            imagePNG: clutch1PNG,
            imageWEBP: clutch1WEBP,
            position: 'center',
        },
        {
            id: 16,
            imagePreviewJPG: wickerBackpack1JPG,
            imagePreviewPNG: wickerBackpack1PNG,
            imagePreviewWEBP: wickerBackpack1WEBP,
            imageJPG: wickerBackpack1JPG,
            imagePNG: wickerBackpack1PNG,
            imageWEBP: wickerBackpack1WEBP,
            position: 'center',
        },
        {
            id: 17,
            imagePreviewJPG: wickerBackpack2PreviewJPG,
            imagePreviewPNG: wickerBackpack2PreviewPNG,
            imagePreviewWEBP: wickerBackpack2PreviewWEBP,
            imageJPG: wickerBackpack2JPG,
            imagePNG: wickerBackpack2PNG,
            imageWEBP: wickerBackpack2WEBP,
            position: 'center left',
        },
        {
            id: 18,
            imagePreviewJPG: wickerBackpack3JPG,
            imagePreviewPNG: wickerBackpack3PNG,
            imagePreviewWEBP: wickerBackpack3WEBP,
            imageJPG: wickerBackpack3JPG,
            imagePNG: wickerBackpack3PNG,
            imageWEBP: wickerBackpack3WEBP,
            position: 'center right',
        },
        {
            id: 19,
            imagePreviewJPG: greyArmchair1JPG,
            imagePreviewPNG: greyArmchair1PNG,
            imagePreviewWEBP: greyArmchair1WEBP,
            imageJPG: greyArmchair1JPG,
            imagePNG: greyArmchair1PNG,
            imageWEBP: greyArmchair1WEBP,
            position: 'center',
        },
        {
            id: 20,
            imagePreviewJPG: greyArmchair2PreviewJPG,
            imagePreviewPNG: greyArmchair2PreviewPNG,
            imagePreviewWEBP: greyArmchair2PreviewWEBP,
            imageJPG: greyArmchair2JPG,
            imagePNG: greyArmchair2PNG,
            imageWEBP: greyArmchair2WEBP,
            position: 'center',
        },
        {
            id: 21,
            imagePreviewJPG: blackSofaJPG,
            imagePreviewPNG: blackSofaPNG,
            imagePreviewWEBP: blackSofaWEBP,
            imageJPG: blackSofaJPG,
            imagePNG: blackSofaPNG,
            imageWEBP: blackSofaWEBP,
            position: 'center left',
        },
        {
            id: 22,
            imagePreviewJPG: yellowOttomanJPG,
            imagePreviewPNG: yellowOttomanPNG,
            imagePreviewWEBP: yellowOttomanWEBP,
            imageJPG: yellowOttomanJPG,
            imagePNG: yellowOttomanPNG,
            imageWEBP: yellowOttomanWEBP,
            position: 'center',
        },
        {
            id: 23,
            imagePreviewJPG: greyOttomanJPG,
            imagePreviewPNG: greyOttomanPNG,
            imagePreviewWEBP: greyOttomanWEBP,
            imageJPG: greyOttomanJPG,
            imagePNG: greyOttomanPNG,
            imageWEBP: greyOttomanWEBP,
            position: 'center left',
        },
        {
            id: 24,
            imagePreviewJPG: headphones1JPG,
            imagePreviewPNG: headphones1PNG,
            imagePreviewWEBP: headphones1WEBP,
            imageJPG: headphones1JPG,
            imagePNG: headphones1PNG,
            imageWEBP: headphones1WEBP,
            position: 'center',
        },
        {
            id: 25,
            imagePreviewJPG: headphones2JPG,
            imagePreviewPNG: headphones2PNG,
            imagePreviewWEBP: headphones2WEBP,
            imageJPG: headphones2JPG,
            imagePNG: headphones2PNG,
            imageWEBP: headphones2WEBP,
            position: 'center',
        },
        {
            id: 26,
            imagePreviewJPG: table1JPG,
            imagePreviewPNG: table1PNG,
            imagePreviewWEBP: table1WEBP,
            imageJPG: table1JPG,
            imagePNG: table1PNG,
            imageWEBP: table1WEBP,
            position: 'center',
        },
        {
            id: 27,
            imagePreviewJPG: table2JPG,
            imagePreviewPNG: table2PNG,
            imagePreviewWEBP: table2WEBP,
            imageJPG: table2JPG,
            imagePNG: table2PNG,
            imageWEBP: table2WEBP,
            position: 'center',
        },
        {
            id: 28,
            imagePreviewJPG: table3JPG,
            imagePreviewPNG: table3PNG,
            imagePreviewWEBP: table3WEBP,
            imageJPG: table3JPG,
            imagePNG: table3PNG,
            imageWEBP: table3WEBP,
            position: 'center',
        },
        {
            id: 29,
            imagePreviewJPG: table4JPG,
            imagePreviewPNG: table4PNG,
            imagePreviewWEBP: table4WEBP,
            imageJPG: table4JPG,
            imagePNG: table4PNG,
            imageWEBP: table4WEBP,
            position: 'center',
        },
        {
            id: 30,
            imagePreviewJPG: colorOttomansPreviewJPG,
            imagePreviewPNG: colorOttomansPreviewPNG,
            imagePreviewWEBP: colorOttomansPreviewWEBP,
            imageJPG: colorOttomansJPG,
            imagePNG: colorOttomansPNG,
            imageWEBP: colorOttomansWEBP,
            position: 'center left',
        },
        {
            id: 31,
            imagePreviewJPG: tvStand1PreviewJPG,
            imagePreviewPNG: tvStand1PreviewPNG,
            imagePreviewWEBP: tvStand1PreviewWEBP,
            imageJPG: tvStand1JPG,
            imagePNG: tvStand1PNG,
            imageWEBP: tvStand1WEBP,
            position: 'center',
        },
        {
            id: 32,
            imagePreviewJPG: tvStand2JPG,
            imagePreviewPNG: tvStand2PNG,
            imagePreviewWEBP: tvStand2WEBP,
            imageJPG: tvStand2JPG,
            imagePNG: tvStand2PNG,
            imageWEBP: tvStand2WEBP,
            position: 'center',
        },
        {
            id: 33,
            imagePreviewJPG: tvStand3JPG,
            imagePreviewPNG: tvStand3PNG,
            imagePreviewWEBP: tvStand3WEBP,
            imageJPG: tvStand3JPG,
            imagePNG: tvStand3PNG,
            imageWEBP: tvStand3WEBP,
            position: 'center',
        },

        {
            id: 34,
            imagePreviewJPG: recordPlayer1JPG,
            imagePreviewPNG: recordPlayer1PNG,
            imagePreviewWEBP: recordPlayer1WEBP,
            imageJPG: recordPlayer1JPG,
            imagePNG: recordPlayer1PNG,
            imageWEBP: recordPlayer1WEBP,
            position: 'center',
        },
        {
            id: 35,
            imagePreviewJPG: recordPlayer2JPG,
            imagePreviewPNG: recordPlayer2PNG,
            imagePreviewWEBP: recordPlayer2WEBP,
            imageJPG: recordPlayer2JPG,
            imagePNG: recordPlayer2PNG,
            imageWEBP: recordPlayer2WEBP,
            position: 'center left',
        },
        {
            id: 36,
            imagePreviewJPG: orangeArmchair1JPG,
            imagePreviewPNG: orangeArmchair1PNG,
            imagePreviewWEBP: orangeArmchair1WEBP,
            imageJPG: orangeArmchair1JPG,
            imagePNG: orangeArmchair1PNG,
            imageWEBP: orangeArmchair1WEBP,
            position: 'center',
        },
        {
            id: 37,
            imagePreviewJPG: orangeArmchair2JPG,
            imagePreviewPNG: orangeArmchair2PNG,
            imagePreviewWEBP: orangeArmchair2WEBP,
            imageJPG: orangeArmchair2JPG,
            imagePNG: orangeArmchair2PNG,
            imageWEBP: orangeArmchair2WEBP,
            position: 'center',
        },
        {
            id: 38,
            imagePreviewJPG: orangeArmchair3JPG,
            imagePreviewPNG: orangeArmchair3PNG,
            imagePreviewWEBP: orangeArmchair3WEBP,
            imageJPG: orangeArmchair3JPG,
            imagePNG: orangeArmchair3PNG,
            imageWEBP: orangeArmchair3WEBP,
            position: 'center',
        },
        {
            id: 39,
            imagePreviewJPG: orangeArmchair4JPG,
            imagePreviewPNG: orangeArmchair4PNG,
            imagePreviewWEBP: orangeArmchair4WEBP,
            imageJPG: orangeArmchair4JPG,
            imagePNG: orangeArmchair4PNG,
            imageWEBP: orangeArmchair4WEBP,
            position: 'center',
        },
        {
            id: 40,
            imagePreviewJPG: inverterJPG,
            imagePreviewPNG: inverterPNG,
            imagePreviewWEBP: inverterWEBP,
            imageJPG: inverterJPG,
            imagePNG: inverterPNG,
            imageWEBP: inverterWEBP,
            position: 'center',
        },
    ];

    const prevImage = (e: MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();
        if (imageInModal === 1) {
            setImageInModal(content.length);

        } else {
            setImageInModal(prev => prev - 1);
        }
    }

    const nextImage = (e: MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();
        if (imageInModal === content.length) {
            setImageInModal(1);
        } else {
            setImageInModal(prev => prev + 1);
        }
    }

    return (
        <ModellingContentContainerStyled $isScroll={isScroll}>
            {isMobile && (
                <NavigationItemStyled
                    $isActive={false}
                >
                    3D Modeling & Visualization
                </NavigationItemStyled>
            )}
            {modalIsShow && <Modal closeModal={closeModal} modalActive={modalIsShow}>
                <BackArrowStyled fontSize={'large'} onClick={(e) => prevImage(e)}/>
                    <picture>
                        <source type={'image/webp'}
                                srcSet={content.filter(pic => pic.id === imageInModal)[0].imageWEBP}/>
                        <source type={'image/png'} srcSet={content.filter(pic => pic.id === imageInModal)[0].imagePNG}/>
                        <BigImageStyled src={content.filter(pic => pic.id === imageInModal)[0].imageJPG} width={'100%'} height={'100%'}/>
                    </picture>
                <ForwardArrowStyled fontSize={'large'} onClick={(e) => nextImage(e)}/>
            </Modal>}
            {content.map(pic =>
                <ImageStyled
                    key={pic.id}
                    onClick={() => openModal(pic.id)}
                    jpg={pic.imagePreviewJPG}
                    png={pic.imagePreviewPNG}
                    webp={pic.imagePreviewWEBP}
                    position={pic.position}
                />
            )}
        </ModellingContentContainerStyled>
    );
};
