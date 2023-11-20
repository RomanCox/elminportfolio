import styled from 'styled-components';

interface BurgerButtonStyledPropsType {
    $homePage: boolean;
    $isMobile: boolean;
}

interface BarStyledPropsType extends BurgerButtonStyledPropsType {
    $isBurgerMenuOpened: boolean;
}

export const BurgerButtonStyled = styled.div<BurgerButtonStyledPropsType>`
  width: ${({$homePage, $isMobile}) => $homePage && $isMobile ? '200px' : '30px'};
  height: 30px;
  // height: ${({$homePage, $isMobile}) => $homePage && $isMobile ? '40px' : '30px'};
  padding: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BarsStyled = styled.div<BarStyledPropsType>`
  width: ${({$homePage, $isMobile}) => $homePage && $isMobile ? '100%' : '90%'};
  height: 5px;
  border-radius: 2.5px;
  background-color: ${({$isBurgerMenuOpened, $homePage, $isMobile}) =>
    $isBurgerMenuOpened && !$isMobile ? 'transparent' : $homePage ? '#fff' : '#000'};
  position: relative;
  transition: ${({$isBurgerMenuOpened}) =>
    $isBurgerMenuOpened ? 'all 0ms 300ms' : 'none'};
  
  &:before {
    content: '';
    width: 100%;
    height: 5px;
    border-radius: 2.5px;
    position: absolute;
    left: 0;
    bottom: ${({$isBurgerMenuOpened, $isMobile}) =>
    $isBurgerMenuOpened && !$isMobile ? '0' : '12px'};
    transform: ${({$isBurgerMenuOpened, $isMobile}) =>
    $isBurgerMenuOpened && !$isMobile ? 'rotate(-45deg)' : 'none'};
    background-color: ${({$homePage}) => $homePage ? '#fff' : '#000'};
    transition: ${({$isBurgerMenuOpened}) =>
    $isBurgerMenuOpened
        ? 'bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)'
        : 'bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'};
  }

  &:after {
    content: '';
    width: 100%;
    height: 5px;
    border-radius: 2.5px;
    position: absolute;
    left: 0;
    top: ${({$isBurgerMenuOpened, $isMobile}) => ($isBurgerMenuOpened && !$isMobile ? '0' : '12px')};
    transform: ${({$isBurgerMenuOpened, $isMobile}) =>
            $isBurgerMenuOpened && !$isMobile ? 'rotate(45deg)' : 'none'};
    background-color: ${({$homePage}) => $homePage ? '#fff' : '#000'};
    transition: ${({$isBurgerMenuOpened}) =>
            $isBurgerMenuOpened
                    ? 'top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                    : 'top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'};
  }
`;
