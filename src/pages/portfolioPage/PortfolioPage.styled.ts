import styled from 'styled-components';

interface NavigationItemStyledPropsType {
    $isActive: boolean,
}

interface VideoContainerPropsType {
    $image: string,
    $width: number,
    $height: number,
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
  line-height: 67px;
  font-weight: 700;
  text-align: start;
  user-select: none;
`;

export const TitleAndChaptersContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
`;

export const NavigationItemsContainerStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  overflow-x: scroll;
`;

export const NavigationItemStyled = styled.a<NavigationItemStyledPropsType>`
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  color: black !important;
  font-family: Libre Franklin, sans-serif;
  font-size: ${({$isActive}) => $isActive ? '32px' : '24px'};
  line-height: 120%;
  font-weight: ${({$isActive}) => $isActive ? '700' : '500'};
  text-align: center;
  user-select: none;
  cursor: pointer;

  div {
    height: 40px;
    display: flex;
    align-items: flex-end;
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

export const VideosContainerStyled = styled.div`
  width: 100%;
  padding: 0 30px 75px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
  overflow-y: auto;
`;


export const VideoContainerStyled = styled.div<VideoContainerPropsType>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: 15px;
  background-image: ${({ $image }) => `url(${$image})`};
  background-position: center center;
`;
