import {MouseEvent} from 'react';
import {BarsStyled, BurgerButtonStyled} from './Header.styled.ts';

export interface BurgerStyledPropsType {
    $isBurgerMenuOpened: boolean;
    $homePage: boolean;
}

interface BurgerButtonPropsType {
    menuIsShow: boolean;
    homePage: boolean;
    menuSwitch: () => void;
}

export const BurgerButton = ({menuIsShow, menuSwitch, homePage}: BurgerButtonPropsType) => {
	const onClickHandler = (e: MouseEvent) => {
		e.stopPropagation();
		menuSwitch();
	}

	return (
	<BurgerButtonStyled onClick={e => onClickHandler(e)}>
		<BarsStyled
			$isBurgerMenuOpened={menuIsShow}
			$homePage={homePage}
		/>
	</BurgerButtonStyled>
	)
};
