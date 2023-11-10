import {PATH} from '../../App.tsx';
import {IconSet} from '../iconSet';

import {
    FooterContainerStyled,
    LinkStyled,
    LocationContainerStyled,
    SocialLinksContainerStyled,
} from './Footer.styled.ts';

export interface FooterPropsType {
    menuSwitch: () => void;
    homePage?: boolean;
}

export const Footer = ({menuSwitch, homePage = false}: FooterPropsType) =>
    <FooterContainerStyled $homePage={homePage} onClick={menuSwitch}>
        <LocationContainerStyled $homePage={homePage}>
            Minsk, Belarus
        </LocationContainerStyled>
        <SocialLinksContainerStyled>
            {homePage ? <LinkStyled to={PATH.PORTFOLIO}>Portfolio</LinkStyled>
                : <IconSet/>
            }
        </SocialLinksContainerStyled>
    </FooterContainerStyled>;
