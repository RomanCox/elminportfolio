import {useState} from 'react';

import {PortfolioNavigation} from './PortfolioNavigation.tsx';
import {PortfolioContent} from './PortfolioContent.tsx';

import {PortfolioPageContainerStyled} from './PortfolioPage.styled.ts';
import {MobilePropsType} from '../../App.tsx';

export type ActiveChapterType = 'View All' | 'Interactive & Animation' | '3D Modeling & Visualization';

const PortfolioPage = ({isMobile}: MobilePropsType) => {
	const [activeChapter, setActiveChapter] = useState<ActiveChapterType>('View All');

	const chooseChapter = (value: ActiveChapterType) => {
		setActiveChapter(value);
	};

	return (
		<PortfolioPageContainerStyled>
			<PortfolioNavigation isMobile={isMobile} activeChapter={activeChapter} chooseChapter={chooseChapter}/>
			<PortfolioContent isMobile={isMobile} activeChapter={activeChapter}/>
		</PortfolioPageContainerStyled>
	);
};

export default PortfolioPage;
