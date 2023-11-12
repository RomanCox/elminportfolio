import {GradientStripeStyled} from './Gradient.styled.ts';

interface GradientPropsType {
    angle?: number;
}

export const Gradient = ({angle = 0}: GradientPropsType) => <GradientStripeStyled $angle={angle}/>
