import {useState} from 'react';

import {PortfolioNavigation} from './PortfolioNavigation.tsx';
import {PortfolioContent} from './PortfolioContent.tsx';

import {PortfolioPageContainerStyled} from './PortfolioPage.styled.ts';

export type ActiveChapterType = 'View All' | 'Interactive & Animation' | '3D Modeling & Visualization';

const PortfolioPage = () => {
	const [activeChapter, setActiveChapter] = useState<ActiveChapterType>('View All');

	const chooseChapter = (value: ActiveChapterType) => {
		setActiveChapter(value);
	};

	return (
		<PortfolioPageContainerStyled>
			<PortfolioNavigation activeChapter={activeChapter} chooseChapter={chooseChapter}/>
			<PortfolioContent activeChapter={activeChapter}/>
		</PortfolioPageContainerStyled>
	);
};

export default PortfolioPage;
