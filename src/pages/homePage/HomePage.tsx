import {useState} from 'react';
import {NavLink} from 'react-router-dom';

import {Header} from '../../components/header';
import {Title} from '../../components/title';
import {Footer} from '../../components/footer';
import {BurgerMenu} from '../../components/burgerMenu';
import {VideoBG} from './VideoBG.tsx';
import {PATH} from '../../App.tsx';

import {
	HomePageContainerStyled, ContentContainerStyled, TitleContainer,
	ServicesListContainer, ButtonStyled,
} from './HomePage.styled.ts';

const HomePage = () => {
	const [menuIsShow, setMenuIsShow] = useState<boolean>(false);

	const menuSwitch = () => {
		setMenuIsShow(!menuIsShow);
	};

	return (
		<HomePageContainerStyled>
			<VideoBG/>
			<Header menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage/>
			<BurgerMenu menuIsShow={menuIsShow} homePage/>
			<ContentContainerStyled>
				<TitleContainer>
					<Title text='Elmin Karaev' variant='h2' color='#fff'/>
				</TitleContainer>
				<ServicesListContainer>
					3D Modeling | visualization | animation | interactive | VR
				</ServicesListContainer>
				<ButtonStyled
					component={NavLink}
					to={PATH.CONTACTS}
					variant='contained'
				>
					Contact me
				</ButtonStyled>
			</ContentContainerStyled>
			<Footer $homePage/>
		</HomePageContainerStyled>
	);
};

export default HomePage;
