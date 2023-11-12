import {PATH} from '../../App.tsx';
import {IconSet} from '../iconSet';

import {
    FooterContainerStyled,
    FooterWrapperStyled,
    LinkStyled,
    LocationContainerStyled,
    SocialLinksContainerStyled,
} from './Footer.styled.ts';

export interface FooterPropsType {
    menuIsClose: () => void;
    homePage: boolean;
}

export const Footer = ({menuIsClose, homePage}: FooterPropsType) =>
    <FooterWrapperStyled $homePage={homePage} onClick={menuIsClose}>
        <FooterContainerStyled>
            <LocationContainerStyled $homePage={homePage}>
                Minsk, Belarus
            </LocationContainerStyled>
            <SocialLinksContainerStyled>
                {homePage ? <LinkStyled to={PATH.PORTFOLIO}>Portfolio</LinkStyled>
                    : <IconSet/>
                }
            </SocialLinksContainerStyled>
        </FooterContainerStyled>
    </FooterWrapperStyled>;
