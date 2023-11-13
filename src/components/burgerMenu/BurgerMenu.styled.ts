import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

interface HomePagePropsType {
    $homePage: boolean;
}

interface MenuContainerStyledPropsType {
    $menuIsShow: boolean;
    $menuIndent: number;
}

export const WrapperStyled = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
`;

export const MenuContainerStyled = styled.div<MenuContainerStyledPropsType & HomePagePropsType>`
  width: 145px;
  height: 100vh;
  padding: 130px 30px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: ${({$homePage, $menuIndent}) => $homePage ? $menuIndent : 'auto'};
  right: ${({$homePage}) => $homePage ? 'auto' : '11px'};
  z-index: 2;
  display: flex;
  justify-content: ${({$homePage}) => $homePage ? 'flex-start' : 'flex-end'};
  align-items: flex-start;
  opacity: ${({$menuIsShow}) => $menuIsShow ? '1' : '0'};
  transform: ${({$menuIsShow, $homePage}) => $menuIsShow
          ? 'translateX(0)'
          : $homePage ? 'translateX(-100%)' : 'translateX(100%)'
  };
  transition: ${({$menuIsShow}) =>
          `transform 0.5s ease-in-out 0s, opacity 0.25s ease-in-out ${$menuIsShow ? '0.15' : '0'}s`};
  background: ${({$homePage}) => $homePage ? 'transparent' : 'white'};

  @media screen and (max-width: 1024px) {
    width: auto;
    height: auto;
    padding: 15px;
    top: ${({$homePage}) => $homePage ? '110px' : '85px'};
    left: ${({$homePage}) => $homePage ? '50%' : 'auto'};
    transform: ${({$menuIsShow, $homePage}) => $menuIsShow
            ? $homePage ? 'translate(-50%, 0)' : 'translateY(0)'
            : $homePage ? 'translate(-50%, -100%)' : 'translateY(-100%)'
    };
  }
`;

export const NavbarStyled = styled.nav<HomePagePropsType>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({$homePage}) => $homePage ? 'flex-start' : 'flex-end'};
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 1024px) {
    align-items: ${({$homePage}) => $homePage ? 'center' : 'flex-end'};
  }
`;

export const NavbarItemStyled = styled(NavLink)<HomePagePropsType>`
  display: list-item;
  text-align: left;
  font-family: Libre Franklin, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  // color: #fff;
  color: ${({$homePage}) => $homePage ? '#fff' : '#000'};
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    // color: #fff;
    color: ${({$homePage}) => $homePage ? '#fff' : '#000'};
    font-size: 26px;
    font-weight: 600;
  }

  &:visited {
    // color: #fff;
    color: ${({$homePage}) => $homePage ? '#fff' : '#000'};
  }
`;
