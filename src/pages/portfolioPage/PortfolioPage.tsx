import {useState} from 'react';

import {BurgerMenu} from '../../components/burgerMenu';
import {Header} from '../../components/header';

import {Footer} from '../../components/footer';

import {PortfolioNavigation} from './PortfolioNavigation.tsx';
import {PortfolioContent} from './PortfolioContent.tsx';

import {PortfolioPageContainerStyled} from './PortfolioPage.styled.ts';

export type ActiveChapterType = 'View All' | 'Interactive & Animation' | '3D Modeling & Visualization';

const PortfolioPage = () => {
	const [activeChapter, setActiveChapter] = useState<ActiveChapterType>('View All');
	const [menuIsShow, setMenuIsShow] = useState<boolean>(false);

	const menuSwitch = () => {
		setMenuIsShow(!menuIsShow);
	};

	const chooseChapter = (value: ActiveChapterType) => {
		setActiveChapter(value);
	};

	return (
		<PortfolioPageContainerStyled>
			{menuIsShow && <BurgerMenu menuIsShow={menuIsShow}/>}
			<Header menuIsShow={menuIsShow} menuSwitch={menuSwitch}/>
			<PortfolioNavigation activeChapter={activeChapter} chooseChapter={chooseChapter}/>
			<PortfolioContent activeChapter={activeChapter}/>
			<Footer/>
		</PortfolioPageContainerStyled>
	);
};

export default PortfolioPage;
