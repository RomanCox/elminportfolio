import styled from 'styled-components';
import {Button} from '@mui/material';
import {NavLink} from "react-router-dom";

interface ContentContainerStyledPropsType {
    $menuIsShow: boolean;
}

export const HomePageContainerStyled = styled.div`
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: black;

  @media screen and (max-width: 500px) {
    height: 100%;
    // padding: 45vh 0 90px;
    padding: 87vw 0 90px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const VideoBGContainerStyled = styled.div`
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    padding-top: calc(15vw + 30px);
  }
`;

export const VideoBGStyled = styled.iframe`
  transform: scale(1.13);
  border: 0;

  @media screen and (max-width: 500px) {
    height: 56.25vw;
  }
`;

export const BlackoutStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ContentWrapperStyled = styled.div`
  height: 200px;
  max-width: 100vw;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 500px) {
    height: auto;
    padding: 0 30px;
    align-items: flex-start;
    gap: 20px;
    overflow: hidden;
  }
`;

export const ContentContainerStyled = styled.div<ContentContainerStyledPropsType>`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  transform: ${({$menuIsShow}) => $menuIsShow ? 'translateX(-55%)' : 'none'};
  transition: transform 0.5s ease-in-out 0s;
`;

export const FrameStyled = styled.div`
  width: calc(100vw - 60px);
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const NavBarContainerStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const NavbarItemStyled = styled(NavLink)`
  display: list-item;
  text-align: left;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:visited {
    color: white;
  }
  
  &::marker {
    content: '';
  }
`;

export const TitleContainer = styled.div`
  font-family: Libre Franklin, sans-serif;
  font-size: 42px;
  line-height: 50px;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 500px) {
    text-align: left;
    font-size: 28px;
    line-height: 32px;
  }
`;

export const ServicesListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  color: #fff;
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  text-align: justify;
  word-spacing: 5px;

  div {
    &:after {
      content: '';
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: #fff;
    }
  }

  @media screen and (max-width: 500px) {
    text-align: left;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2) !important;
  color: #fff;
  font-family: Libre Franklin, sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 500 !important;
  text-align: justify !important;
  text-transform: uppercase !important;
  
  &:hover, &:active, &:focus {
    color: #fff;
    outline: none;
    border: none;
  }

  @media screen and (max-width: 500px) {
    height: 30px;
    font-size: 16px !important;
    line-height: 20px !important;
    text-transform: capitalize !important;
  }
`;

export const ButtonsContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
