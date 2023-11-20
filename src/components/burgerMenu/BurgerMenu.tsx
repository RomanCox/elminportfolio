import {MouseEvent} from 'react';
import {PATH} from '../../App.tsx';

import {MenuContainerStyled, NavbarItemStyled, NavbarStyled, WrapperStyled} from './BurgerMenu.styled.ts';

interface BurgerMenuPropsType {
    menuIsShow: boolean;
    menuSwitch: () => void;
    homePage: boolean;
    isMobile?: boolean;
    menuIndent?: number;
}

export const BurgerMenu = ({menuIsShow, menuSwitch, homePage, isMobile = false, menuIndent = 0}: BurgerMenuPropsType) => {
    const onClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        menuSwitch();
    }

    return (
        <>
            {menuIsShow && !isMobile && <WrapperStyled onClick={e => onClickHandler(e)}/>}
            <MenuContainerStyled $menuIsShow={menuIsShow} $homePage={homePage} $menuIndent={menuIndent} $isMobile={isMobile}>
                <NavbarStyled $homePage={homePage} onClick={menuSwitch}>
                    {!homePage && <NavbarItemStyled to={PATH.HOME} $homePage={homePage}>
                        Home
                    </NavbarItemStyled>}
                    <NavbarItemStyled to={PATH.ABOUT} $homePage={homePage}>
                        About
                    </NavbarItemStyled>
                    <NavbarItemStyled to={PATH.PORTFOLIO} $homePage={homePage}>
                        Portfolio
                    </NavbarItemStyled>
                    <NavbarItemStyled to={PATH.SERVICES} $homePage={homePage}>
                        Services
                    </NavbarItemStyled>
                    <NavbarItemStyled to={PATH.CONTACTS} $homePage={homePage}>
                        Contacts
                    </NavbarItemStyled>
                </NavbarStyled>
            </MenuContainerStyled>
        </>
    )
};
