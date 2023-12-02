import styled from 'styled-components';

import {type LogoShowType, type VariantType} from './Logo.tsx';

export const LogoContainerStyled = styled.div<{ color: VariantType, size: string }>`
  width: 100%;
  height: 100%;
  padding: 0 5%;
  border-color: ${({ color }) => `${color}`};
  border-style: solid;
  border-width: ${({ size }) => size === 'small' ? '2px' : '3px'};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  
  picture {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 439px) {
    border-width: 2px;
  }
`;

export const LogoStyled = styled.img`
  object-fit: contain;
`;

export const AfterBlockStyled = styled.div<LogoShowType>`
  width: 0;
  height: ${({size}) => size === 'large' ? '16px' : '16%'};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #000;
  position: absolute;
  left: 50%;
  bottom: ${({size, $homePage}) => size === 'large' || $homePage ? '-10%' : '-12%'};
  transform: translateX(-50%);
  font-family: Libre Franklin, sans-serif;
  font-size: 100%;
  line-height: 100%;
  font-weight: 600;
  letter-spacing: normal;
  box-sizing: border-box;
  text-align: center;
  animation: expanding 0.5s ease 1.5s forwards;

  span {
    opacity: ${({ $show }) => $show ? '1' : 0};
    transition: opacity 0.5s ease 0s;
  }

  &:after, &:before {
    content: '';
    width: 1px;
    height: 0;
    background: ${({ color }) => color};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: grow 1.5s ease 1s forwards;
  }

  &:after {
    left: 0;
  }

  &:before {
    right: 0;
  }

  @keyframes expanding {
    0% {
      width: 0;
    }
    100% {
      width: 25%;
    }
  }

  @keyframes grow {
    0% {
      height: 0;
    }
    33% {
       height: 100%;
    }
    66% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }

  @media screen and (max-width: 500px) {
    height: calc(10px + (20 - 10) * (100vw - 320px) / (439 - 320));
    bottom: calc(-7.5px + (-11 + 7.5) * (100vw - 320px) / (439 - 320));
    font-size: calc(8px + (16 - 8) * (100vw - 320px) / (439 - 320));
    line-height: 100%;

    @keyframes expanding {
      0% {
        width: 0;
      }
      100% {
        width: calc(75px + (100 - 75) * (100vw - 320px) / (439 - 320));
      }
    }
  }
`;
