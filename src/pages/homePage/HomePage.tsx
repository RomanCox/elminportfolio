import {useState} from 'react';
import {NavLink} from 'react-router-dom';

import {Title} from '../../components/title';
import {VideoBG} from './VideoBG.tsx';
import {BurgerButton} from '../../components/burgerButton';

import {MobilePropsType, PATH} from '../../App.tsx';

import {
    HomePageContainerStyled,
    ContentWrapperStyled,
    ContentContainerStyled,
    FrameStyled,
    ServicesListContainer,
    TitleContainer,
    ButtonsContainerStyled,
    ButtonStyled,
    NavBarContainerStyled,
    NavbarItemStyled,
} from './HomePage.styled.ts';

const HomePage = ({isMobile}: MobilePropsType) => {
    const [menuIsShow, setMenuIsShow] = useState<boolean>(false);

    const menuSwitch = () => {
        setMenuIsShow(!menuIsShow);
    };

    return (
        <HomePageContainerStyled>
            <VideoBG/>
            <ContentWrapperStyled>
                {isMobile
                    ? <ContentContainerStyled $menuIsShow={menuIsShow}>
                        <FrameStyled>
                            <TitleContainer>
                                <Title text={'ELMIN KARAEV'} variant={'h2'} color={'#fff'}/>
                            </TitleContainer>
                            <ServicesListContainer>
                                3d modeling | visualization | animation | interactive | vr
                            </ServicesListContainer>
                        </FrameStyled>
                        <FrameStyled>
                            <NavBarContainerStyled>
                                <NavbarItemStyled to={PATH.ABOUT}>
                                    About
                                </NavbarItemStyled>
                                <NavbarItemStyled to={PATH.PORTFOLIO}>
                                    Portfolio
                                </NavbarItemStyled>
                                <NavbarItemStyled to={PATH.SERVICES}>
                                    Services
                                </NavbarItemStyled>
                                <NavbarItemStyled to={PATH.CONTACTS}>
                                    Contacts
                                </NavbarItemStyled>
                            </NavBarContainerStyled>
                        </FrameStyled>
                    </ContentContainerStyled>
                    : <>
                        <TitleContainer>
                            <Title text={'ELMIN KARAEV'} variant={'h2'} color={'#fff'}/>
                        </TitleContainer>
                        <ServicesListContainer>
                            3d modeling | visualization | animation | interactive | vr
                        </ServicesListContainer>
                        <ButtonStyled
                            component={NavLink}
                            to={PATH.CONTACTS}
                            variant={'contained'}
                        >
                            Contact me
                        </ButtonStyled>
                    </>
                }

            </ContentWrapperStyled>
            {isMobile && <ButtonsContainerStyled>
                <ButtonStyled
                    component={NavLink}
                    to={PATH.CONTACTS}
                    variant={'contained'}
                >
                    Contact me
                </ButtonStyled>
                <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage isMobile={isMobile}/>
            </ButtonsContainerStyled>}
        </HomePageContainerStyled>
    )
}

export default HomePage;
