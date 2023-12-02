import {PATH} from '../../App.tsx';
import {Logo} from '../../components/logo';
// import photo from '../../assets/images/avatar.png';

import {
	MainPageContainerStyled,
	// PhotoContainerStyled,
	// PhotoStyled,
	ContentContainerStyled,
	MobileLogoContainer,
	LogoContainerStyled,
	NameContainerStyled,
	NameStyled,
	DescriptionContainerStyled,
	ButtonContainerStyled, LinkStyled,
	ButtonDescriptionContainerStyled,
} from './MainPage.styled.ts';

export const MainPageMobile = () => <MainPageContainerStyled>
			<MobileLogoContainer>
				<LogoContainerStyled>
					<Logo variant='black'/>
				</LogoContainerStyled>
			</MobileLogoContainer>
			{/*<PhotoContainerStyled>*/}
			{/*	<PhotoStyled src={photo}/>*/}
			{/*</PhotoContainerStyled>*/}
			<ContentContainerStyled>
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
