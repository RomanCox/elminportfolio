import styled from 'styled-components';

import {NavLink} from 'react-router-dom';

interface HeaderPropsType {
    $homePage?: boolean;
}

interface WidthPropsType extends HeaderPropsType{
    $width?: number;
}

interface VisitedPropsType {
    $visited: boolean;
}

export const HeaderContainerStyled = styled.div<HeaderPropsType>`
  width: 100vw;
  max-width: 1920px;
  padding: 20px 30px 15px;
  position: fixed;
  top: 0;
  left: 50vw;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: ${({$homePage}) => $homePage ? 'center' : 'flex-end'};
  box-sizing: border-box;
  background: ${({$homePage}) => $homePage ? 'transparent' : '#fff'};

  @media screen and (max-width: 1024px) {
    justify-content: center;
    background: ${({$homePage}) => $homePage ? 'black' : '#fff'};
  }

  @media screen and (max-width: 899px) {
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    padding: 15px 20vw;
  }
`;

export const BurgerButtonContainerStyled = styled.div<WidthPropsType>`
  width: ${({$width}) => `${$width}px`};

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 50%;
    left: ${({$homePage}) => $homePage ? '30px' : 'auto'};
    right: ${({$homePage}) => $homePage ? 'auto' : '30px'};
    transform: translateY(-50%);
  }
`;

export const LogoContainerStyled = styled(NavLink)<HeaderPropsType>`
  width: ${({$homePage = false}) => $homePage ? '300px' : '200px'};
  height: ${({$homePage = false}) => $homePage ? '75px' : '50px'};
  font-size: ${({$homePage = false}) => $homePage ? '12px' : '8px'};

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 200px;
    height: 15vw;
    max-height: 75px;
  }
`;

export const SocialLinksContainerStyled = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NavbarItemStyled = styled(NavLink)<VisitedPropsType>`
  padding: 0 40px;
  box-sizing: border-box;
  position: relative;
  color: #000;
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  &:before {
    content: '';
    width: ${({$visited}) => $visited ? '51.5%' : '0'};
    height: 2px;
    position: absolute;
    bottom: -15px;
    left: ${({$visited}) => $visited ? '-1.5%' : '50%'};
    z-index: 1;
    background: #000;
    transition: all 0.25s ease-in-out 0s;
  }

  &:after {
    content: '';
    width: ${({$visited}) => $visited ? '51.5%' : '0'};
    height: 2px;
    position: absolute;
    bottom: -15px;
    left: 50%;
    z-index: 1;
    background: #000;
    transition: all 0.25s ease-in-out 0s;
  }

  &:hover {
    color: #000;

    &:before {
      width: 51.5%;
      left: -1.5%;
    }

    &:after {
      width: 51.5%;
    }
  }

  &:visited {
    color: #000;
  }

  @media screen and (max-width: 1280px) {
    padding: 0 20px;
  }
`;

export const BottomLineStyled = styled.div`
  width: calc(100% + 20px);
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #CDCCD7;
`;
