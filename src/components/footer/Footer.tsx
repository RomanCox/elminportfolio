import {useWindowSize} from '../../hooks/useWindowsize';

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
    isMobile?: boolean;
}

export const Footer = ({menuIsClose, homePage, isMobile}: FooterPropsType) => {
    const windowSize = useWindowSize();

    return (
        <FooterWrapperStyled $homePage={homePage} onClick={menuIsClose}>
            <FooterContainerStyled>
                {!isMobile && <LocationContainerStyled $homePage={homePage}>
                    Minsk, Belarus
                </LocationContainerStyled>}
                {windowSize.width <= 1024 && homePage &&
                    <SocialLinksContainerStyled $center>
                        <IconSet/>
                    </SocialLinksContainerStyled>
                }
                <SocialLinksContainerStyled>
                    {homePage ? !isMobile && <LinkStyled to={PATH.PORTFOLIO}>Portfolio</LinkStyled>
                        : <IconSet/>
                    }
                </SocialLinksContainerStyled>
            </FooterContainerStyled>
        </FooterWrapperStyled>
    )
};
