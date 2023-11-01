import {useState} from 'react';

import {BurgerMenu} from '../../components/burgerMenu';
import {Header} from '../../components/header';

import {Footer} from '../../components/footer';

import {PortfolioNavigation} from './PortfolioNavigation.tsx';
import {PortfolioContent} from './PortfolioContent.tsx';

import {PortfolioPageContainerStyled} from './PortfolioPage.styled.ts';

const PortfolioPage = () => {
	const [activeChapter, setActiveChapter] = useState<string>('View All');
	const [menuIsShow, setMenuIsShow] = useState<boolean>(false);

	const menuSwitch = () => {
		setMenuIsShow(!menuIsShow);
	};

	const chooseChapter = (value: string) => {
		setActiveChapter(value);
	};

	return (
		<PortfolioPageContainerStyled>
			<BurgerMenu menuIsShow={menuIsShow}/>
			<Header menuIsShow={menuIsShow} menuSwitch={menuSwitch}/>
			<PortfolioNavigation activeChapter={activeChapter} chooseChapter={chooseChapter}/>
			<PortfolioContent activeChapter={activeChapter}/>
			<Footer/>
		</PortfolioPageContainerStyled>
	);
};

export default PortfolioPage;
