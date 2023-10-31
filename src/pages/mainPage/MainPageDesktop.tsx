import {PATH} from '../../App';
import {Logo} from '../../components/logo/Logo';
import photo from '../../assets/images/avatar.png';

import {
    MainPageContainerStyled,
    PhotoContainerStyled,
    PhotoStyled,
    ContentContainerStyled,
    LogoContainerStyled,
    NameContainerStyled,
    NameStyled,
    DescriptionContainerStyled,
    ButtonContainerStyled, LinkStyled,
    ButtonDescriptionContainerStyled,
} from './MainPage.styled.ts';

export const MainPageDesktop = () => <MainPageContainerStyled>
            <PhotoContainerStyled>
                <PhotoStyled src={photo} alt={'my photo'}/>
            </PhotoContainerStyled>
            <ContentContainerStyled>
                <LogoContainerStyled>
                    <Logo variant='black' size='large'/>
                </LogoContainerStyled>
                <NameContainerStyled>
                    <NameStyled>Elmin Karaev</NameStyled>
                    <DescriptionContainerStyled>
                        My name is Elmin, and I am a CG Artist from Minsk. I specialize in 3D graphics
                    </DescriptionContainerStyled>
                </NameContainerStyled>
                <ButtonContainerStyled>
                    <LinkStyled to={PATH.HOME}>Enter</LinkStyled>
                    <ButtonDescriptionContainerStyled>
                        Press Enter to go to my site
                    </ButtonDescriptionContainerStyled>
                </ButtonContainerStyled>
            </ContentContainerStyled>
        </MainPageContainerStyled>;
