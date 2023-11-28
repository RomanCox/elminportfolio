import {useEffect, useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useWindowSize} from '../../hooks/useWindowsize';

import {BurgerButton} from '../burgerButton';
import {Logo} from '../logo';
import {IconSet} from '../iconSet';
import {PATH} from '../../App.tsx';

import {
    BottomLineStyled,
    BurgerButtonContainerStyled,
    HeaderContainerStyled,
    LogoContainerStyled,
    NavbarItemStyled,
    NavbarStyled,
    SocialLinksContainerStyled,
} from './Header.styled.ts';

interface HeaderPropsType {
    menuIsShow: boolean;
    menuSwitch: () => void;
    menuIsClose: () => void;
    homePage: boolean;
    isMobile: boolean;
}

export const Header = ({
                           menuIsShow,
                           menuSwitch,
                           menuIsClose,
                           homePage,
                           isMobile,
                       }: HeaderPropsType) => {
    const [isShowBurgerButton, setIsShowBurgerButton] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);
    const location = useLocation();

    const windowSize = useWindowSize();

    const div = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (windowSize.width && windowSize.width >= 900) {
            setIsShowBurgerButton(false);
        }
        if (windowSize.width && windowSize.width < 900) {
            setIsShowBurgerButton(true);
        }

        if (windowSize.width && windowSize.width > 1024) {
            div?.current && setWidth(div.current.offsetWidth)
        }
    }, [windowSize, div.current]);

    return (
        <HeaderContainerStyled $homePage={homePage} onClick={menuIsClose}>
            {homePage
                ? <>
                    {!isMobile && <BurgerButtonContainerStyled $homePage={homePage} $width={width}>
                        <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage={homePage} isMobile={isMobile}/>
                    </BurgerButtonContainerStyled>}
                    <LogoContainerStyled to={PATH.HOME} $homePage>
                        <Logo variant='white' homePage/>
                    </LogoContainerStyled>
                    {windowSize.width > 1024 &&
                        <SocialLinksContainerStyled ref={div}>
                            <IconSet/>
                        </SocialLinksContainerStyled>
                    }
                </>
                : <>
                    <LogoContainerStyled to={PATH.HOME}>
                        <Logo variant='black'/>
                    </LogoContainerStyled>
                    {isShowBurgerButton
                        ? <BurgerButtonContainerStyled>
                            <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage={homePage} isMobile={isMobile}/>
                        </BurgerButtonContainerStyled>
                        : <NavbarStyled>
                            <NavbarItemStyled to={PATH.HOME} $visited={location.pathname === PATH.HOME}>
                                Home
                            </NavbarItemStyled>
                            <NavbarItemStyled to={PATH.ABOUT} $visited={location.pathname === PATH.ABOUT}>
                                About
                            </NavbarItemStyled>
                            <NavbarItemStyled to={PATH.PORTFOLIO} $visited={location.pathname === PATH.PORTFOLIO}>
                                Portfolio
                            </NavbarItemStyled>
                            <NavbarItemStyled to={PATH.SERVICES} $visited={location.pathname === PATH.SERVICES}>
                                Services
                            </NavbarItemStyled>
                            <NavbarItemStyled to={PATH.CONTACTS} $visited={location.pathname === PATH.CONTACTS}>
                                Contacts
                            </NavbarItemStyled>
                        </NavbarStyled>}
                    <BottomLineStyled/>
                </>
            }
        </HeaderContainerStyled>
    );
};
