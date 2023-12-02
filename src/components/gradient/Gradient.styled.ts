import styled from 'styled-components';

interface GradientStyledPropsType {
    $angle: number;
}

export const GradientStripeStyled = styled.div<GradientStyledPropsType>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  background: ${({ $angle }) => `linear-gradient(${$angle}deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,1) 100%)`};
`;
