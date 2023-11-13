import {MouseEvent} from 'react';
import {PATH} from '../../App.tsx';

import {MenuContainerStyled, NavbarItemStyled, NavbarStyled, WrapperStyled} from './BurgerMenu.styled.ts';

interface BurgerMenuPropsType {
    menuIsShow: boolean;
    menuSwitch: () => void;
    homePage: boolean;
    menuIndent: number;
}

export const BurgerMenu = ({menuIsShow, menuSwitch, homePage, menuIndent}: BurgerMenuPropsType) => {
    const onClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        menuSwitch();
    }

    console.log(homePage)

    return (
        <>
            {menuIsShow && <WrapperStyled onClick={e => onClickHandler(e)}/>}
            <MenuContainerStyled $menuIsShow={menuIsShow} $homePage={homePage} $menuIndent={menuIndent}>
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
