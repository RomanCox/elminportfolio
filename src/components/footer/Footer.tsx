import {PATH} from '../../App.tsx';
import {IconSet} from '../iconSet';

import {
	FooterContainerStyled, LocationContainerStyled,
	SocialLinksContainerStyled, LinkStyled,
} from './Footer.styled.ts';

export interface FooterPropsType {
    $homePage?: boolean;
}

export const Footer = ({$homePage = false}: FooterPropsType) => <FooterContainerStyled $homePage={$homePage}>
			<LocationContainerStyled $homePage={$homePage}>
				Minsk, Belarus
			</LocationContainerStyled>
			<SocialLinksContainerStyled>
				{$homePage ? <LinkStyled to={PATH.PORTFOLIO}>Portfolio</LinkStyled>
					: <IconSet/>
				}
			</SocialLinksContainerStyled>
		</FooterContainerStyled>;
