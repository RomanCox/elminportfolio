import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export interface FooterStyledPropsType {
    $homePage: boolean;
}

export const FooterWrapperStyled = styled.div<FooterStyledPropsType>`
  height: 75px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $homePage }) => $homePage ? 'rgba(0, 0, 0, 0.5)' : '#fff'};
`;

export const FooterContainerStyled = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LocationContainerStyled = styled.div<FooterStyledPropsType>`
  color: ${({ $homePage }) => $homePage ? '#fff' : '#000'};
  font-family: Libre Franklin, sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  text-align: start;
`;

export const SocialLinksContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const LinkStyled = styled(NavLink)`
  color: #fff;
  font-family: Libre Franklin, sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  text-align: end;
`;
