import {useEffect, useState} from 'react';

import {Title} from '../../components/title';

import {ActiveChapterType} from './PortfolioPage.tsx';

import {
	DescriptionContainerStyled,
	NavigationContainerStyled,
	NavigationItemsContainerStyled,
	NavigationItemStyled,
	TitleAndChaptersContainerStyled,
	TitleContainerStyled,
} from './PortfolioPage.styled.ts';


interface AboutNavigationPropsType {
    activeChapter: string;
    chooseChapter: (value: ActiveChapterType) => void;
}

interface ChapterType {
	id: number;
	label: ActiveChapterType;
	description: string[];
}

export const PortfolioNavigation = ({activeChapter, chooseChapter}: AboutNavigationPropsType) => {
	const [description, setDescription] = useState<string[]>([]);
	const chapters: ChapterType[] = [
		{
			id: 0,
			label: 'View All',
			description: [],
		},
		{
			id: 1,
			label: 'Interactive & Animation',
			description: [],
		},
		{
			id: 2,
			label: '3D Modeling & Visualization',
			description: [
				'In this section you will see my best work on architectural visualization in Unreal Engine. I create projects in Unreal Engine. I customize renderings of interiors and exteriors.',
				'I create video presentation of real estate, interactive projects for personal computers as well as VR projects. You can see the quality of visualization and experience of my work in the examples.',
			],
		},
	];

	useEffect(() => {
		const description = chapters.filter(chapter => chapter.label === activeChapter)[0].description;
		setDescription(description);
	}, [activeChapter]);

	return (
		<NavigationContainerStyled>
			<TitleAndChaptersContainerStyled>
				<TitleContainerStyled>
					<Title variant='h1' color='#000' text={'Portfolio'}/>
				</TitleContainerStyled>
				<NavigationItemsContainerStyled>
					{chapters.map(chapter =>
						<NavigationItemStyled
							key={chapter.id}
							$isActive={chapter.label === activeChapter}
							onClick={() => { chooseChapter(chapter.label); }}
						>
							<div>{chapter.label}</div>
						</NavigationItemStyled>)
					}
				</NavigationItemsContainerStyled>
			</TitleAndChaptersContainerStyled>
			{description.length > 0 && <DescriptionContainerStyled>
				{description.map(text => <div key={text}>
					{text}
				</div>)}
			</DescriptionContainerStyled>}
		</NavigationContainerStyled>
	);
};
