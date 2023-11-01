import {PATH} from '../../App.tsx';

import {MenuContainerStyled, NavbarItemStyled, NavbarStyled} from './BurgerMenu.styled.ts';

interface BurgerMenuPropsType {
    menuIsShow: boolean;
    homePage?: boolean;
}

export const BurgerMenu = ({menuIsShow, homePage = false}: BurgerMenuPropsType) =>
	<MenuContainerStyled $menuIsShow={menuIsShow} $homePage={homePage}>
		<NavbarStyled $homePage={homePage}>
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
	</MenuContainerStyled>;
