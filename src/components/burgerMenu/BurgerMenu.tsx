import {PATH} from '../../App.tsx';

import {MenuContainerStyled, NavbarItemStyled, NavbarStyled, WrapperStyled} from './BurgerMenu.styled.ts';

interface BurgerMenuPropsType {
    menuIsShow: boolean;
    menuSwitch: () => void;
    homePage?: boolean;
}

export const BurgerMenu = ({menuIsShow, menuSwitch, homePage = false}: BurgerMenuPropsType) => {
    //const onClose =

    return (
        <>
            {menuIsShow && <WrapperStyled onClick={menuSwitch}/>}
            <MenuContainerStyled $menuIsShow={menuIsShow} $homePage={homePage}>
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
