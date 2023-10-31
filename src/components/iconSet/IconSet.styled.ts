import styled from 'styled-components';

export const SocialLinkContainerStyled = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SocialLinkStyled = styled.a`
  color: #000;

  picture {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  };
`;

export const ImageStyled = styled.img`
  object-fit: fill;
`;
