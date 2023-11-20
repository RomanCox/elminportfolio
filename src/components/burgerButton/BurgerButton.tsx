import {MouseEvent} from 'react';
import {BarsStyled, BurgerButtonStyled} from './BurgerButton.styled.ts';

interface BurgerButtonPropsType {
    menuIsShow: boolean;
    homePage: boolean;
    isMobile: boolean;
    menuSwitch: () => void;
}

export const BurgerButton = ({menuIsShow, menuSwitch, homePage, isMobile}: BurgerButtonPropsType) => {
    const onClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        menuSwitch();
    }

    return (
        <BurgerButtonStyled
            onClick={e => onClickHandler(e)}
            $homePage={homePage}
            $isMobile={isMobile}
        >
            <BarsStyled
                $isBurgerMenuOpened={menuIsShow}
                $homePage={homePage}
                $isMobile={isMobile}
            />
        </BurgerButtonStyled>
    )
};
