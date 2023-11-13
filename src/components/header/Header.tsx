import {useEffect, useRef, useState} from 'react';

import {useWindowSize} from '../../hooks/useWindowsize';

import {Logo} from '../logo';
import {IconSet} from '../iconSet';
import {PATH} from '../../App.tsx';

import {BurgerButton} from './BurgerButton.tsx';

import {
    BottomLineStyled,
    BurgerButtonContainerStyled,
    HeaderContainerStyled,
    LogoContainerStyled,
    NavbarItemStyled,
    NavbarStyled,
    SocialLinksContainerStyled,
} from './Header.styled.ts';
import {useLocation} from "react-router-dom";

interface HeaderPropsType {
    menuIsShow: boolean;
    menuSwitch: () => void;
    menuIsClose: () => void;
    homePage: boolean;
}

export const Header = ({
                           menuIsShow,
                           menuSwitch,
                           menuIsClose,
                           homePage,
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
    }, [windowSize.width]);

    useEffect(() => {
        if (div && div.current) {
            setWidth(div.current.offsetWidth)
        }
    }, [div, div.current]);

    return (
        <HeaderContainerStyled $homePage={homePage} onClick={menuIsClose}>
            {homePage
                ? <>
                    <BurgerButtonContainerStyled $homePage={homePage} $width={width}>
                        <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage={homePage}/>
                    </BurgerButtonContainerStyled>
                    <LogoContainerStyled to={PATH.HOME} $homePage>
                        <Logo variant='white' homePage/>
                    </LogoContainerStyled>
                    {windowSize.width > 1024 &&
                        <SocialLinksContainerStyled>
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
                            <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage={homePage}/>
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
