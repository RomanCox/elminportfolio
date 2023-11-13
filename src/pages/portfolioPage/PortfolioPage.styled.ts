import styled from 'styled-components';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

interface NavigationItemStyledPropsType {
    $isActive: boolean;
    $width?: number;
}

interface VideoContainerPropsType {
    $image: string;
}

export interface ScrollStyledPropsType {
    $isScroll?: boolean;
}

interface ImagePropsType {
    jpg: string;
    png: string;
    webp: string;
    position?: string;
}

interface NavigationGradientStyledPropsType {
    $left?: boolean;
    $right?: boolean;
}

export const PortfolioPageContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  padding: 75px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

export const NavigationContainerStyled = styled.div`
  width: 100%;
  padding: 30px 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  box-sizing: border-box;
`;

export const TitleContainerStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  font-family: Libre Franklin, sans-serif;
  font-size: 56px;
  line-height: 64px;
  font-weight: 700;
  text-align: start;
  user-select: none;

  @media screen and (max-width: 1280px) {
    font-size: 32px;
    line-height: 100%;
  }
`;

export const TitleAndChaptersContainerStyled = styled.div`
  width: 100%;
  padding-right: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 50px;
`;

export const NavigationItemsWrapperStyled = styled.div`
  width: 100%;
  max-width: 950px;
  margin-bottom: 7px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1280px) {
    margin-bottom: 0;
  }
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
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  overflow-x: auto;
  overflow-y: hidden;

  @media screen and (max-width: 1280px) {
    width: auto;
    margin-bottom: 0;
  }
`;

export const NavigationItemStyled = styled.div<NavigationItemStyledPropsType>`
  width: ${({ $width }) => `${$width}px`};
  height: 32px;
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
  white-space: nowrap;
  
  @media screen and (min-width: 1025px) {
    span {
      display: flex;
      align-items: flex-end;
      transition: transform 0.25s linear;
      backface-visibility: hidden;
      position: absolute;
    }

    span:nth-child(1) {
      transform: perspective(200px) rotateX(0deg);
    }

    span:nth-child(2) {
      transform: perspective(200px) rotateX(-180deg);
    }
    
    &:hover {
      span:nth-child(1) {
        transform: ${({ $isActive }) => $isActive ? 'perspective(600px) rotateX(0deg)' : 'perspective(600px) rotateX(180deg)'};
      }
      span:nth-child(2) {
        transform: ${({ $isActive }) => $isActive ? 'perspective(600px) rotateX(-180deg)' : 'perspective(600px) rotateX(0deg)'};
      }
    }
  }

  @media screen and (max-width: 1280px) {
    font-size: ${({$isActive}) => $isActive ? '28px' : '20px'};
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
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  text-align: left;
  user-select: none;
`;

export const AllContentContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 50px;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const VideosContainerStyled = styled.div<ScrollStyledPropsType>`
  width: 100%;
  padding: 0 30px 75px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 5px;
  overflow-y: ${({ $isScroll = true }) => $isScroll ? 'visible' : 'auto'};
  scrollbar-width: thin;
`;


export const VideoContainerStyled = styled.div<VideoContainerPropsType>`
  width: calc((100vw - 85px) / 2);
  max-width: 922px;
  height: calc((100vw - 85px) / 3.555);
  max-height: 519px;
  border-radius: 15px;
  background-image: ${({$image}) => `url(${$image})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const ModellingContentContainerStyled = styled.div<ScrollStyledPropsType>`
  width: 100%;
  padding: 0 30px 0; // TODO refactor padding-bottom
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 5px;
  overflow-y: ${({ $isScroll = true }) => $isScroll ? 'visible' : 'auto'};
  scrollbar-width: thin;
`;

export const BackArrowStyled = styled(ArrowBackIosRoundedIcon)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ForwardArrowStyled = styled(ArrowForwardIosRoundedIcon)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const BigImageStyled = styled.img`
  max-width: 80vw;
  max-height: 90vh;
`;

export const ImageStyled = styled.div<ImagePropsType>`
  width: calc((100vw - 100px) / 5);
  max-width: 364px;
  height: calc((100vw - 100px) / 5);
  max-height: 364px;
  background-image: ${({jpg, png, webp}) => `-webkit-image-set(
  url(${jpg}) type('image/jpg'),
  url(${png}) type('image/png'),
  url(${webp}) type('image/webp')
  )`};
  background-image: ${({jpg, png, webp}) => `image-set(
  url(${jpg}) type('image/jpg'),
  url(${png}) type('image/png'),
  url(${webp}) type('image/webp')
  )`};
  background-size: cover;
  background-origin: content-box;
  background-position: ${({ position }) => position};
  background-repeat: no-repeat;
`;
