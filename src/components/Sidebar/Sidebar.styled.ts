import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

interface HomePagePropsType {
    $homePage: boolean;
}

interface SidebarContainerStyledPropsType extends HomePagePropsType {
    $sidebarIsShow: boolean;
    $isMobile: boolean;
    $sidebarIndent: number;
}

export const SidebarContainerStyled = styled.div<SidebarContainerStyledPropsType & HomePagePropsType>`
  width: 145px;
  height: 100vh;
  padding: 85px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: ${({$homePage}) => $homePage ? 'flex-start' : 'flex-end'};
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: ${({$homePage, $sidebarIsShow}) => $homePage
          ? $sidebarIsShow ? '0' : '-100%'
          : 'auto'
  };
  right: ${({$homePage, $sidebarIsShow}) => $homePage
          ? 'auto'
          : $sidebarIsShow ? '0' : '-100%'
  };
  z-index: 1;
  opacity: ${({$sidebarIsShow}) => $sidebarIsShow ? '1' : '0'};
  transition: all 0.5s ease-in-out 0s;
  
  @media screen and (max-width: 1024px) {
    width: auto;
    height: auto;
    padding: 15px;
    top: ${({$homePage}) => $homePage ? '110px' : '85px'};
    left: ${({$homePage}) => $homePage ? '50%' : 'auto'};
    transform: ${({$sidebarIsShow, $homePage}) => $sidebarIsShow
            ? $homePage ? 'translate(-50%, 0)' : 'translateY(0)'
            : $homePage ? 'translate(-50%, -100%)' : 'translateY(-100%)'
    };
  }

  @media screen and (max-width: 500px) {
    width: ${({$homePage}) => $homePage ? '100%' : 'auto'};
    height: ${({$homePage}) => $homePage ? 'auto' : 'auto'};
    position: ${({$homePage}) => $homePage ? 'static' : 'absolute'};
  };
`;

export const NavbarStyled = styled.nav<HomePagePropsType>`
  height: 100%;
  padding: 55px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({$homePage}) => $homePage ? 'flex-start' : 'flex-end'};
  gap: 20px;
  list-style: none;
  background: ${({$homePage}) => $homePage ? 'transparent' : 'white'};

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
  color: ${({$homePage}) => $homePage ? '#fff' : '#000'};
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${({$homePage}) => $homePage ? '#fff' : '#000'};
    font-size: 26px;
    font-weight: 600;
  }

  &:visited {
    color: ${({$homePage}) => $homePage ? '#fff' : '#000'};
  }
`;
