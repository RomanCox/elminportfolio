import {useState} from 'react';
import {Modal} from '../../components/modal';

import armchair1JPG from '../../assets/images/portfolio/modelling/armchair1.jpg';
import armchair1PNG from '../../assets/images/portfolio/modelling/armchair1.png';
import armchair1WEBP from '../../assets/images/portfolio/modelling/armchair1.webp';
import armchair2JPG from '../../assets/images/portfolio/modelling/armchair2.jpg';
import armchair2PNG from '../../assets/images/portfolio/modelling/armchair2.png';
import armchair2WEBP from '../../assets/images/portfolio/modelling/armchair2.webp';
import armchair3JPG from '../../assets/images/portfolio/modelling/armchair3.jpg';
import armchair3PNG from '../../assets/images/portfolio/modelling/armchair3.png';
import armchair3WEBP from '../../assets/images/portfolio/modelling/armchair3.webp';
import armchair4JPG from '../../assets/images/portfolio/modelling/armchair4.jpg';
import armchair4PNG from '../../assets/images/portfolio/modelling/armchair4.png';
import armchair4WEBP from '../../assets/images/portfolio/modelling/armchair4.webp';
import armchair5JPG from '../../assets/images/portfolio/modelling/armchair5.jpg';
import armchair5PNG from '../../assets/images/portfolio/modelling/armchair5.png';
import armchair5WEBP from '../../assets/images/portfolio/modelling/armchair5.webp';
import armchair6JPG from '../../assets/images/portfolio/modelling/armchair6.jpg';
import armchair6PNG from '../../assets/images/portfolio/modelling/armchair6.png';
import armchair6WEBP from '../../assets/images/portfolio/modelling/armchair6.webp';
import armchair7JPG from '../../assets/images/portfolio/modelling/armchair7.jpg';
import armchair7PNG from '../../assets/images/portfolio/modelling/armchair7.png';
import armchair7WEBP from '../../assets/images/portfolio/modelling/armchair7.webp';
import armchair8JPG from '../../assets/images/portfolio/modelling/armchair8.jpg';
import armchair8PNG from '../../assets/images/portfolio/modelling/armchair8.png';
import armchair8WEBP from '../../assets/images/portfolio/modelling/armchair8.webp';
import armchair9JPG from '../../assets/images/portfolio/modelling/armchair9.jpg';
import armchair9PNG from '../../assets/images/portfolio/modelling/armchair9.png';
import armchair9WEBP from '../../assets/images/portfolio/modelling/armchair9.webp';
import backpack1JPG from '../../assets/images/portfolio/modelling/backpack1.jpg';
import backpack1PNG from '../../assets/images/portfolio/modelling/backpack1.png';
import backpack1WEBP from '../../assets/images/portfolio/modelling/backpack1.webp';
import backpack2JPG from '../../assets/images/portfolio/modelling/backpack2.jpg';
import backpack2PNG from '../../assets/images/portfolio/modelling/backpack2.png';
import backpack2WEBP from '../../assets/images/portfolio/modelling/backpack2.webp';
import backpack3JPG from '../../assets/images/portfolio/modelling/backpack3.jpg';
import backpack3PNG from '../../assets/images/portfolio/modelling/backpack3.png';
import backpack3WEBP from '../../assets/images/portfolio/modelling/backpack3.webp';
import backpack4JPG from '../../assets/images/portfolio/modelling/backpack4.jpg';
import backpack4PNG from '../../assets/images/portfolio/modelling/backpack4.png';
import backpack4WEBP from '../../assets/images/portfolio/modelling/backpack4.webp';
import backpack5JPG from '../../assets/images/portfolio/modelling/backpack5.jpg';
import backpack5PNG from '../../assets/images/portfolio/modelling/backpack5.png';
import backpack5WEBP from '../../assets/images/portfolio/modelling/backpack5.webp';
import backpack6JPG from '../../assets/images/portfolio/modelling/backpack6.jpg';
import backpack6PNG from '../../assets/images/portfolio/modelling/backpack6.png';
import backpack6WEBP from '../../assets/images/portfolio/modelling/backpack6.webp';
import bag1JPG from '../../assets/images/portfolio/modelling/bag1.jpg';
import bag1PNG from '../../assets/images/portfolio/modelling/bag1.png';
import bag1WEBP from '../../assets/images/portfolio/modelling/bag1.webp';
import bag2JPG from '../../assets/images/portfolio/modelling/bag2.jpg';
import bag2PNG from '../../assets/images/portfolio/modelling/bag2.png';
import bag2WEBP from '../../assets/images/portfolio/modelling/bag2.webp';
import bag3JPG from '../../assets/images/portfolio/modelling/bag3.jpg';
import bag3PNG from '../../assets/images/portfolio/modelling/bag3.png';
import bag3WEBP from '../../assets/images/portfolio/modelling/bag3.webp';
import bed1JPG from '../../assets/images/portfolio/modelling/bed1.jpg';
import bed1PNG from '../../assets/images/portfolio/modelling/bed1.png';
import bed1WEBP from '../../assets/images/portfolio/modelling/bed1.webp';
import bed2JPG from '../../assets/images/portfolio/modelling/bed2.jpg';
import bed2PNG from '../../assets/images/portfolio/modelling/bed2.png';
import bed2WEBP from '../../assets/images/portfolio/modelling/bed2.webp';
import bed3JPG from '../../assets/images/portfolio/modelling/bed3.jpg';
import bed3PNG from '../../assets/images/portfolio/modelling/bed3.png';
import bed3WEBP from '../../assets/images/portfolio/modelling/bed3.webp';
import clutch1JPG from '../../assets/images/portfolio/modelling/clutch1.jpg';
import clutch1PNG from '../../assets/images/portfolio/modelling/clutch1.png';
import clutch1WEBP from '../../assets/images/portfolio/modelling/clutch1.webp';
import headphones1JPG from '../../assets/images/portfolio/modelling/headphones1.jpg';
import headphones1PNG from '../../assets/images/portfolio/modelling/headphones1.png';
import headphones1WEBP from '../../assets/images/portfolio/modelling/headphones1.webp';
import headphones2JPG from '../../assets/images/portfolio/modelling/headphones2.jpg';
import headphones2PNG from '../../assets/images/portfolio/modelling/headphones2.png';
import headphones2WEBP from '../../assets/images/portfolio/modelling/headphones2.webp';
import inverterJPG from '../../assets/images/portfolio/modelling/inverter.jpg';
import inverterPNG from '../../assets/images/portfolio/modelling/inverter.png';
import inverterWEBP from '../../assets/images/portfolio/modelling/inverter.webp';

import ottoman1JPG from '../../assets/images/portfolio/modelling/ottoman1.jpg';
import ottoman1PNG from '../../assets/images/portfolio/modelling/ottoman1.png';
import ottoman1WEBP from '../../assets/images/portfolio/modelling/ottoman1.webp';
import ottoman2JPG from '../../assets/images/portfolio/modelling/ottoman2.jpg';
import ottoman2PNG from '../../assets/images/portfolio/modelling/ottoman2.png';
import ottoman2WEBP from '../../assets/images/portfolio/modelling/ottoman2.webp';
import ottoman3JPG from '../../assets/images/portfolio/modelling/ottoman3.jpg';
import ottoman3PNG from '../../assets/images/portfolio/modelling/ottoman3.png';
import ottoman3WEBP from '../../assets/images/portfolio/modelling/ottoman3.webp';
import recordPlayer1JPG from '../../assets/images/portfolio/modelling/recordplayer1.jpg';
import recordPlayer1PNG from '../../assets/images/portfolio/modelling/recordplayer1.png';
import recordPlayer1WEBP from '../../assets/images/portfolio/modelling/recordplayer1.webp';
import recordPlayer2JPG from '../../assets/images/portfolio/modelling/recordplayer2.jpg';
import recordPlayer2PNG from '../../assets/images/portfolio/modelling/recordplayer2.png';
import recordPlayer2WEBP from '../../assets/images/portfolio/modelling/recordplayer2.webp';
import sofa1JPG from '../../assets/images/portfolio/modelling/sofa1.jpg';
import sofa1PNG from '../../assets/images/portfolio/modelling/sofa1.png';
import sofa1WEBP from '../../assets/images/portfolio/modelling/sofa1.webp';
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
import tvStand1JPG from '../../assets/images/portfolio/modelling/tvstand1.jpg';
import tvStand1PNG from '../../assets/images/portfolio/modelling/tvstand1.png';
import tvStand1WEBP from '../../assets/images/portfolio/modelling/tvstand1.webp';
import tvStand2JPG from '../../assets/images/portfolio/modelling/tvstand2.jpg';
import tvStand2PNG from '../../assets/images/portfolio/modelling/tvstand2.png';
import tvStand2WEBP from '../../assets/images/portfolio/modelling/tvstand2.webp';
import tvStand3JPG from '../../assets/images/portfolio/modelling/tvstand3.jpg';
import tvStand3PNG from '../../assets/images/portfolio/modelling/tvstand3.png';
import tvStand3WEBP from '../../assets/images/portfolio/modelling/tvstand3.webp';

import {BigImageStyled, ImageStyled, ModellingContentContainerStyled} from './PortfolioPage.styled.ts';

export const ModellingContent = () => {
    const [modalIsShow, setModalIsShow] = useState<boolean>(false);
    const [imageInModal, setImageInModal] = useState<number | null>(null);

    const openModal = (id: number) => {
        setModalIsShow(true);
        setImageInModal(id);
    };

    const closeModal = () => {
        setModalIsShow(false);
        setImageInModal(null);
    };

    const content = [
        {
            id: 0,
            imageJPG: bed1JPG,
            imagePNG: bed1PNG,
            imageWEBP: bed1WEBP,
        },
        {
            id: 1,
            imageJPG: bed2JPG,
            imagePNG: bed2PNG,
            imageWEBP: bed2WEBP,
        },
        {
            id: 2,
            imageJPG: bed3JPG,
            imagePNG: bed3PNG,
            imageWEBP: bed3WEBP,
        },
        {
            id: 3,
            imageJPG: armchair1JPG,
            imagePNG: armchair1PNG,
            imageWEBP: armchair1WEBP,
        },
        {
            id: 4,
            imageJPG: armchair2JPG,
            imagePNG: armchair2PNG,
            imageWEBP: armchair2WEBP,
        },
        {
            id: 5,
            imageJPG: armchair3JPG,
            imagePNG: armchair3PNG,
            imageWEBP: armchair3WEBP,
        },
        {
            id: 6,
            imageJPG: armchair4JPG,
            imagePNG: armchair4PNG,
            imageWEBP: armchair4WEBP,
        },
        {
            id: 7,
            imageJPG: armchair5JPG,
            imagePNG: armchair5PNG,
            imageWEBP: armchair5WEBP,
        },
        {
            id: 8,
            imageJPG: armchair6JPG,
            imagePNG: armchair6PNG,
            imageWEBP: armchair6WEBP,
        },
        {
            id: 9,
            imageJPG: armchair7JPG,
            imagePNG: armchair7PNG,
            imageWEBP: armchair7WEBP,
        },
        {
            id: 10,
            imageJPG: backpack1JPG,
            imagePNG: backpack1PNG,
            imageWEBP: backpack1WEBP,
        },
        {
            id: 11,
            imageJPG: backpack2JPG,
            imagePNG: backpack2PNG,
            imageWEBP: backpack2WEBP,
        },
        {
            id: 12,
            imageJPG: backpack3JPG,
            imagePNG: backpack3PNG,
            imageWEBP: backpack3WEBP,
        },
        {
            id: 13,
            imageJPG: backpack4JPG,
            imagePNG: backpack4PNG,
            imageWEBP: backpack4WEBP,
        },
        {
            id: 14,
            imageJPG: backpack5JPG,
            imagePNG: backpack5PNG,
            imageWEBP: backpack5WEBP,
        },
        {
            id: 15,
            imageJPG: backpack6JPG,
            imagePNG: backpack6PNG,
            imageWEBP: backpack6WEBP,
        },
        {
            id: 16,
            imageJPG: clutch1JPG,
            imagePNG: clutch1PNG,
            imageWEBP: clutch1WEBP,
        },
        {
            id: 17,
            imageJPG: bag1JPG,
            imagePNG: bag1PNG,
            imageWEBP: bag1WEBP,
        },
        {
            id: 18,
            imageJPG: bag2JPG,
            imagePNG: bag2PNG,
            imageWEBP: bag2WEBP,
        },
        {
            id: 19,
            imageJPG: bag3JPG,
            imagePNG: bag3PNG,
            imageWEBP: bag3WEBP,
        },
        {
            id: 20,
            imageJPG: armchair8JPG,
            imagePNG: armchair8PNG,
            imageWEBP: armchair8WEBP,
        },
        {
            id: 21,
            imageJPG: armchair9JPG,
            imagePNG: armchair9PNG,
            imageWEBP: armchair9WEBP,
        },
        {
            id: 22,
            imageJPG: sofa1JPG,
            imagePNG: sofa1PNG,
            imageWEBP: sofa1WEBP,
        },
        {
            id: 23,
            imageJPG: ottoman1JPG,
            imagePNG: ottoman1PNG,
            imageWEBP: ottoman1WEBP,
        },
        {
            id: 24,
            imageJPG: ottoman2JPG,
            imagePNG: ottoman2PNG,
            imageWEBP: ottoman2WEBP,
        },
        {
            id: 25,
            imageJPG: ottoman3JPG,
            imagePNG: ottoman3PNG,
            imageWEBP: ottoman3WEBP,
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
            imageJPG: tvStand1JPG,
            imagePNG: tvStand1PNG,
            imageWEBP: tvStand1WEBP,
        },
        {
            id: 31,
            imageJPG: tvStand2JPG,
            imagePNG: tvStand2PNG,
            imageWEBP: tvStand2WEBP,
        },
        {
            id: 32,
            imageJPG: tvStand3JPG,
            imagePNG: tvStand3PNG,
            imageWEBP: tvStand3WEBP,
        },
        {
            id: 33,
            imageJPG: headphones1JPG,
            imagePNG: headphones1PNG,
            imageWEBP: headphones1WEBP,
        },
        {
            id: 34,
            imageJPG: headphones2JPG,
            imagePNG: headphones2PNG,
            imageWEBP: headphones2WEBP,
        },
        {
            id: 35,
            imageJPG: inverterJPG,
            imagePNG: inverterPNG,
            imageWEBP: inverterWEBP,
        },
        {
            id: 36,
            imageJPG: recordPlayer1JPG,
            imagePNG: recordPlayer1PNG,
            imageWEBP: recordPlayer1WEBP,
        },
        {
            id: 37,
            imageJPG: recordPlayer2JPG,
            imagePNG: recordPlayer2PNG,
            imageWEBP: recordPlayer2WEBP,
        },
    ]

    return (
        <ModellingContentContainerStyled>
            {modalIsShow && <Modal closeModal={closeModal} modalActive={modalIsShow}>
                <picture>
                    <source type={'image/webp'} srcSet={content.filter(pic => pic.id === imageInModal)[0].imageWEBP}/>
                    <source type={'image/png'} srcSet={content.filter(pic => pic.id === imageInModal)[0].imagePNG}/>
                    <BigImageStyled src={content.filter(pic => pic.id === imageInModal)[0].imageJPG}/>
                </picture>
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
