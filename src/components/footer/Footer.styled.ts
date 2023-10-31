import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import {type FooterPropsType} from './Footer.tsx';

export const FooterContainerStyled = styled.div<FooterPropsType>`
  width: 100vw;
  max-width: 1920px;
  height: 75px;
  padding: 10px 30px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ $homePage }) => $homePage ? 'rgba(0, 0, 0, 0.5)' : '#fff'};
`;

export const LocationContainerStyled = styled.div<FooterPropsType>`
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
