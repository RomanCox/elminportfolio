import {useEffect, useState} from 'react';

import logoBlackPNG from '../../assets/images/logo/elmin_logo_black.png';
import logoBlackWEBP from '../../assets/images/logo/elmin_logo_black.webp';
import logoWhitePNG from '../../assets/images/logo/elmin_logo_white.png';
import logoWhiteWEBP from '../../assets/images/logo/elmin_logo_white.webp';

import {
	LogoContainerStyled,
	LogoStyled,
	AfterBlockStyled,
} from './Logo.styled.ts';

export type VariantType = 'black' | 'white';

export interface LogoShowType {
	$show: boolean,
	color: VariantType,
	size: string,
	$homePage: boolean,
}

export interface LogoPropsType {
	variant: VariantType,
	size?: string,
	homePage?: boolean,
}

export const Logo = ({variant, size = 'small', homePage = false}: LogoPropsType) => {
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 2000);
	}, []);

	return (
		<LogoContainerStyled color={variant} size={size}>
			<picture>
				<source type="image/webp" srcSet={variant === 'black' ? logoBlackWEBP : logoWhiteWEBP} />
				<source type="image/png" srcSet={variant === 'black' ? logoBlackPNG : logoWhitePNG} />
				<LogoStyled src={variant === 'black' ? logoBlackWEBP : logoWhiteWEBP} width={'100%'} height={'auto'}/>
			</picture>
			<AfterBlockStyled $show={show} color={variant} size={size} $homePage={homePage}>
				{show && <span>CG ARTIST</span>}
			</AfterBlockStyled>
		</LogoContainerStyled>
	);
};
