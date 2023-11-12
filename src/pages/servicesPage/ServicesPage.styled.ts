import styled from 'styled-components';

interface ServiceDescriptionStyledPropsType {
    $first: boolean;
}

export const ServicesPageContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 75px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

export const TitleContainerStyled = styled.div`
  width: 100%;
  padding: 30px 30px 50px;
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
    line-height: 36px;
  }
`;

export const ContextContainerStyled = styled.div`
  width: 100%;
  max-height: calc(100% - 147px);
  padding: 30px 30px 0;
  margin-bottom: 75px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: auto;
  scrollbar-width: thin;
`;

export const ServiceContainerStyled = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  gap: 50px;
`;

export const ImageStyled = styled.img`
  object-fit: cover;
`;

export const DescriptionContainerStyled = styled.div`
  width: 350px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ServiceTitleStyled = styled.h3`
  margin: 0;
  font-family: Libre Franklin, sans-serif;
  font-size: 36px;
  line-height: 43px;
  font-weight: 700;
  text-align: start;
  user-select: none;
`;

export const ServiceLabelStyled = styled.div`
  font-family: Libre Franklin, sans-serif;
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  text-align: start;
  user-select: none;
`;

export const ServiceDescriptionStyled = styled.span<ServiceDescriptionStyledPropsType>`
  margin-top: ${({$first}) => $first ? '30px' : '0'};
  font-family: Libre Franklin, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-align: start;
  user-select: none;
`;
