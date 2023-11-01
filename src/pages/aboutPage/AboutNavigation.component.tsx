import {Title} from '../../components/title';
import {DownloadIcon} from '../../assets/icons/downloadIcon.tsx';
import photo from '../../assets/images/avatar.png';

import {AboutChapterType} from './AboutContent.container.tsx';
import {
	BottomLineStyled,
	ButtonsContainerStyled,
	ChaptersStyled,
	CVButtonBorderStyled,
	CVButtonStyled,
	DescriptionContainerStyled,
	ImageContainer,
	ImageStyled,
	NavigationContainerStyled,
	NavigationItemsContainerStyled,
	NavigationItemStyled,
	TitleContainerStyled,
} from './AboutPage.styled.ts';

interface AboutNavigationPropsType {
    activeChapter: string;
    chooseChapter: (value: string) => void;
    openModal: () => void;
	chapters: AboutChapterType[];
}

export const AboutNavigation = ({activeChapter, chooseChapter, openModal, chapters}: AboutNavigationPropsType) => {

	const navigationChapters = chapters.map(chapter => chapter.label);

	const descriptions = ['I am a professional 3d artist with years of experience in computer graphics.',
		'My skills are growing rapidly.',
		'I achieve my goals in a short time.',
		'Computer graphics is my job and my favorite hobby.',
		'I get a lot of pleasure from it.'];

	return (
		<NavigationContainerStyled>
			<TitleContainerStyled>
				<Title variant='h1' color='#000' text={'About'}/>
				<ImageContainer>
					<ImageStyled src={photo}/>
				</ImageContainer>
			</TitleContainerStyled>
			<ChaptersStyled>
				<ButtonsContainerStyled>
					<NavigationItemsContainerStyled>
						{navigationChapters.map(chapter =>
							<NavigationItemStyled
								key={chapter}
								$isActive={chapter === activeChapter}
								onClick={() => { chooseChapter(chapter); }}
							>
								<div>{chapter}</div>
							</NavigationItemStyled>)
						}
					</NavigationItemsContainerStyled>
					<CVButtonStyled onClick={openModal}>
						<CVButtonBorderStyled width='100px' height='40px' viewBox='0 0 100 40'>
							<polyline points='1,39 99,39 99,1 1,1 1,39'/>
						</CVButtonBorderStyled>
						<DownloadIcon/>
                        CV
					</CVButtonStyled>
				</ButtonsContainerStyled>
				<DescriptionContainerStyled>
					{descriptions.map(text => <div key={text}>
						{text}
					</div>)}
				</DescriptionContainerStyled>
			</ChaptersStyled>
			{/* <ButtonBlockContainerStyled> */}
			{/*    <ButtonContainerStyled> */}
			{/*        <CVButtonStyled onClick={openModal}> */}
			{/*            <CVButtonBorderStyled width='100px' height='40px' viewBox='0 0 100 40'> */}
			{/*                <polyline points='1,39 99,39 99,1 1,1 1,39'/> */}
			{/*            </CVButtonBorderStyled> */}
			{/*            <DownloadIcon/> */}
			{/*            CV */}
			{/*        </CVButtonStyled> */}
			{/*    </ButtonContainerStyled> */}
			{/* </ButtonBlockContainerStyled> */}
			<BottomLineStyled/>
		</NavigationContainerStyled>
	);
};
