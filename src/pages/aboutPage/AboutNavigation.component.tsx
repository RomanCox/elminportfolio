import {useWindowSize} from '../../hooks/useWindowsize';

import {Title} from '../../components/title';
import {DownloadIcon} from '../../assets/icons/downloadIcon.tsx';
import {PhraseRotate} from '../../components/phraseRotate';
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
    NavigationItemsWrapperStyled,
    NavigationContainerStyled,
    NavigationItemsContainerStyled,
    NavigationItemStyled,
    TitleContainerStyled, NavigationGradientContainerStyled,
} from './AboutPage.styled.ts';
import {Gradient} from "../../components/gradient";

interface AboutNavigationPropsType {
    activeChapter: string;
    chooseChapter: (value: string) => void;
    openModal: () => void;
    chapters: AboutChapterType[];
}

export const AboutNavigation = ({activeChapter, chooseChapter, openModal, chapters}: AboutNavigationPropsType) => {
    const windowSize = useWindowSize();
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
                    <NavigationItemsWrapperStyled>
                        {/*<NavigationGradientContainerStyled $left>*/}
                        {/*    <Gradient angle={-90}/>*/}
                        {/*</NavigationGradientContainerStyled>*/}
                        <NavigationItemsContainerStyled>
                            {navigationChapters.map(chapter =>
                                <NavigationItemStyled
                                    key={chapter}
                                    $isActive={chapter === activeChapter}
                                    onClick={() => {
                                        chooseChapter(chapter);
                                    }}
                                >
                                    {windowSize.width <= 1024 || chapter === activeChapter ? chapter :
                                        <PhraseRotate value={chapter}/>}
                                </NavigationItemStyled>)
                            }
                        </NavigationItemsContainerStyled>
                        <NavigationGradientContainerStyled $right>
                            <Gradient angle={90}/>
                        </NavigationGradientContainerStyled>
                    </NavigationItemsWrapperStyled>
                    <CVButtonStyled onClick={openModal}>
                        <CVButtonBorderStyled width='100px' height='100%' viewBox='0 0 100 40'>
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
            <BottomLineStyled/>
        </NavigationContainerStyled>
    );
};
