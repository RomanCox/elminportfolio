import {useEffect, useRef, useState} from 'react';

import {useWindowSize} from '../../hooks/useWindowSize.ts';

import {Logo} from '../logo';
import {IconSet} from '../iconSet';
import {PATH} from '../../App.tsx';

import {BurgerButton} from './BurgerButton.tsx';

import {
    BottomLineStyled,
    BurgerButtonContainerStyled,
    HeaderContainerStyled,
    LangContainerStyled,
    LangStyled,
    LogoContainerStyled,
    NavbarItemStyled,
    NavbarStyled,
    SeparatorStyled,
    SocialLinksAndLangContainerStyled,
    SocialLinksContainerStyled,
} from './Header.styled.ts';

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
                    <BurgerButtonContainerStyled $width={width}>
                        <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage={homePage}/>
                    </BurgerButtonContainerStyled>
                    <LogoContainerStyled to={PATH.HOME} $homePage>
                        <Logo variant='white' homePage/>
                    </LogoContainerStyled>
                    <SocialLinksAndLangContainerStyled ref={div}>
                        <SocialLinksContainerStyled>
                            <IconSet/>
                        </SocialLinksContainerStyled>
                        <LangContainerStyled>
                            <LangStyled>RU</LangStyled>
                            <SeparatorStyled/>
                            <LangStyled>EN</LangStyled>
                        </LangContainerStyled>
                    </SocialLinksAndLangContainerStyled>
                </>
                : <>
                    <LogoContainerStyled to={PATH.HOME}>
                        <Logo variant='black'/>
                    </LogoContainerStyled>
                    {isShowBurgerButton
                        ? <BurgerButton menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage={homePage}/>
                        : <NavbarStyled>
                            <NavbarItemStyled to={PATH.HOME}>
                                Home
                            </NavbarItemStyled>
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
                        </NavbarStyled>}
                    <BottomLineStyled/>
                </>
            }
        </HeaderContainerStyled>
    );
};
