import styled from 'styled-components';

interface NavigationItemStyledPropsType {
    $isActive: boolean;
}

interface GradientStyledPropsType {
    $top?: boolean;
    $bottom?: boolean;
}

interface NavigationGradientStyledPropsType {
    $left?: boolean;
    $right?: boolean;
}

export const AboutPageContainerStyled = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  padding: 85px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

export const CVDownloadMenuContainerStyled = styled.div`
  padding: 0 0 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  background-color: #121212;
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));

  box-shadow: rgba(0, 0, 0, 0.2) 0 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
`;

export const DownloadMenuTitleContainer = styled.div`
  padding: 16px 24px;
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  line-height: 1.6;
  letter-spacing: 0.12px;
  font-weight: 500;
  text-align: center;
  user-select: none;
`;

export const CVDownloadStyled = styled.a`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  font-weight: 500;
  text-align: center;
  user-select: none;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;

  &:hover {
    background-color: #525252;
    color: #fff;
  }
`;

export const NavigationContainerStyled = styled.div`
  width: 100%;
  height: 300px;
  padding: 30px 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 1280px) {
    height: 230px;
    padding: 30px 30px 10px;
  }
`;

export const TitleContainerStyled = styled.div`
  min-width: 170px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  position: relative;
  font-family: Libre Franklin, sans-serif;
  font-size: 56px;
  line-height: 64px;
  font-weight: 700;
  text-align: center;
  user-select: none;

  @media screen and (max-width: 1280px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const ImageContainer = styled.div`
  height: 275px;
  padding: 20px;
  position: absolute;
  top: 90px;
  z-index: 2;
  display: flex;
  align-items: center;
  background: #000;
  border-radius: 7px;
  box-sizing: border-box;

  @media screen and (max-width: 1280px) {
    top: 60px;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
`;

export const ChaptersStyled = styled.div`
  max-width: calc(100% - 210px);
  height: 100%;
  padding-left: 174px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media screen and (max-width: 1920px) {
    padding-left: calc(20vw - 210px);
  }

  @media screen and (max-width: 1280px) {
    padding-left: calc(30vw - 210px);
  }
`;

export const ButtonsContainerStyled = styled.div`
  max-width: 100%;
  padding-left: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const NavigationItemsWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`;

export const NavigationGradientContainerStyled = styled.div<NavigationGradientStyledPropsType>`
  width: 32px;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: ${({$left = false}) => $left ? '-2px' : 'auto'};
  right: ${({$right = false}) => $right ? '-2px' : 'auto'};
  z-index: 1;
`;

export const NavigationItemsContainerStyled = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  overflow-x: auto;
  overflow-y: hidden;

  @media screen and (max-width: 1280px) {
    gap: 20px;
  }
`;

export const NavigationItemStyled = styled.a<NavigationItemStyledPropsType>`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  color: black !important;
  font-family: Libre Franklin, sans-serif;
  font-size: ${({$isActive}) => $isActive ? '32px' : '24px'};
  line-height: 100%;
  font-weight: ${({$isActive}) => $isActive ? '700' : '500'};
  text-align: center;
  user-select: none;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    font-size: ${({$isActive}) => $isActive ? '28px' : '20px'};
  }
`;

export const CVButtonStyled = styled.button`
  width: 100px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: transparent;
  border: none;
  border-radius: 0;
  color: #000;
  position: relative;
  font-family: Libre Franklin, sans-serif;
  font-size: 24px;
  line-height: 100%;
  font-weight: 500;
  text-align: center;
  user-select: none;

  &:hover, &:active, &:focus {
    outline: none;
    color: #000;
  }

  &:hover, svg:hover {
    stroke-dashoffset: 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const CVButtonBorderStyled = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  fill: transparent;
  stroke: #000;
  stroke-dasharray: 280;
  stroke-dashoffset: 280;
  transition: 0.5s ease-in-out;

  &:hover {
    stroke-dashoffset: 0;
  }
`;

export const DescriptionContainerStyled = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-align: left;
  user-select: none;
`;

export const BottomLineStyled = styled.div`
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  background: #CDCCD7;
`;

export const AllContentWrapperStyled = styled.div`
  width: 100%;
  height: calc(100vh - 450px);
  padding-left: 409px;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 1920px) {
    padding-left: calc(20vw + 25px);
  }

  @media screen and (max-width: 1280px) {
    padding-left: calc(30vw + 25px);
  }
`;

export const GradientContainerStyled = styled.div<GradientStyledPropsType>`
  width: calc(100% - 20vw - 55px);
  height: 52px;
  box-sizing: border-box;
  position: absolute;
  top: ${({ $top = false }) => $top ? '-2px' : 'auto'};
  bottom: ${({ $bottom = false }) => $bottom ? '-2px' : 'auto'};
  right: 30px;

  @media screen and (max-width: 1280px) {
    height: 30px;
  }
`;

export const AllContentContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px 50px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  scrollbar-width: thin;

  @media screen and (max-width: 1280px) {
    padding-bottom: 30px;
  }
`;

export const ContentContainerStyled = styled.div`
  width: 100%;
  padding-top: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;

  @media screen and (max-width: 1280px) {
    padding-top: 30px;
  }
`;

export const ContentTitleContainerStyled = styled.div`
  width: 250px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  font-family: Libre Franklin, sans-serif;
  font-size: 48px;
  line-height: 58px;
  font-weight: 700;
  text-align: left;
  user-select: none;

  @media screen and (max-width: 1280px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const EducationContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 100px;
`;

export const YearsStyled = styled.div`
  width: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-align: left;
  user-select: none;
`;

export const TextContainerStyled = styled.div`
  max-width: 410px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const TextStyled = styled.div`
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-align: left;
  user-select: none;
`;

export const TextBoldStyled = styled(TextStyled)`
  font-weight: 700;
`;

export const DescriptionsContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0;
`;
