import styled from 'styled-components';

interface LoadingStyledPropsType {
    $clr: string;
}

export const LoadingContainer = styled.div<LoadingStyledPropsType>`
  width: 100%;
  height: 100%;
  display: flex;
  color: ${({$clr}) => $clr};
`;
