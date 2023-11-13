import styled from 'styled-components';

interface LettersContainerStyledPropsType {
    $bottom?: boolean;
}

interface LetterStyledPropsType extends LettersContainerStyledPropsType {
    $idx: number;
    $width: string;
}

export const PhraseContainerStyled = styled.div`
  position: relative;
  
  &:hover > div:nth-child(1) span {
    transform: translate3d(0, -15%, 0) rotateX(-90deg);
  }

  &:hover > div:nth-child(2) span {
    transform: translate3d(0, 0%, 0) rotateX(0deg);
  }
`;

export const LettersContainerStyled = styled.div<LettersContainerStyledPropsType>`
  position: ${({$bottom = false}) => $bottom ? 'absolute' : 'static'};
  left: ${({$bottom = false}) => $bottom ? '0' : 'auto'};
  top: ${({$bottom = false}) => $bottom ? '0' : 'auto'};
`;

export const LetterStyled = styled.span<LetterStyledPropsType>`
  width: ${({$width}) => $width};
  will-change: transform;
  transform-style: preserve-3d;
  transition: .25s;
  transition-delay: ${({$idx}) => `calc(0.02s * ${$idx})`};
  transform-origin: top;
  display: inline-block;
  transform: ${({$bottom = false}) => $bottom ? 'translate3d(0, 100%, 0) rotateX(-90deg)' : 'translate3d(0, 0, 0) rotateX(0deg)'}; // down
`;
