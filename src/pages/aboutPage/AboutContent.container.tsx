import {useEffect, useRef} from 'react';

import {Gradient} from '../../components/gradient';
import {AboutContent} from './AboutContent.component.tsx';

import {
	AllContentContainerStyled,
	AllContentWrapperStyled,
	GradientContainerStyled,
} from './AboutPage.styled.ts';


interface AboutChapterItemType {
	id: number;
	year: string;
	title: string;
	description: string[];
}

export interface AboutChapterType {
	id: number;
	label: string;
	items: AboutChapterItemType[];
}

export interface AboutContentPropsType {
    activeChapter: string;
	chapters: AboutChapterType[];
}

export const AboutContentContainer = ({activeChapter, chapters}: AboutContentPropsType) => {
	const chaptersRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (chaptersRef.current) {
			chaptersRef.current.scrollBy({top: -50, left: 0, behavior: 'smooth'});
		}
	}, [chaptersRef]);

	return (
		<AllContentWrapperStyled>
			<GradientContainerStyled $top>
				<Gradient/>
			</GradientContainerStyled>
			<AllContentContainerStyled ref={chaptersRef}>
				{chapters.map(chapter =>
					<AboutContent key={chapter.id} chapter={chapter} activeChapter={activeChapter}/>,
				)}
			</AllContentContainerStyled>
			<GradientContainerStyled $bottom>
				<Gradient angle={180}/>
			</GradientContainerStyled>
		</AllContentWrapperStyled>
	);
};
