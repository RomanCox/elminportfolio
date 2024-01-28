import {useEffect, useState} from 'react';
import {useWindowSize} from '../../hooks/useWindowsize';

import {Gradient} from '../../components/gradient';
import {Title} from '../../components/title';
import {NavigationItem} from './NavigationItem.tsx';

import {ActiveChapterType} from './PortfolioPage.tsx';

import {
    DescriptionContainerStyled,
    NavigationContainerStyled,
    NavigationGradientContainerStyled,
    NavigationItemsContainerStyled,
    NavigationItemStyled,
    NavigationItemsWrapperStyled,
    TitleAndChaptersContainerStyled,
    TitleContainerStyled,
} from './PortfolioPage.styled.ts';
import {MobilePropsType} from '../../App.tsx';

interface AboutNavigationPropsType extends MobilePropsType {
    activeChapter: ActiveChapterType;
    chooseChapter: (value: ActiveChapterType) => void;
}

export interface ChapterType {
    id: number;
    label: ActiveChapterType;
    description: string[];
}

export const PortfolioNavigation = ({isMobile, activeChapter, chooseChapter}: AboutNavigationPropsType) => {
    const windowSize = useWindowSize();
    const [description, setDescription] = useState<string[]>([]);
    const chapters: ChapterType[] = [
        {
            id: 0,
            label: 'View All',
            description: [
                'In this section you will see my best work on architectural visualization in Unreal Engine. I create projects in Unreal Engine. I customize renderings of interiors and exteriors.',
                'I create video presentation of real estate, interactive projects for personal computers as well as VR projects. You can see the quality of visualization and experience of my work in the examples.',
            ],
        },
        {
            id: 1,
            label: 'Interactive & Animation',

            description: [
                'In this section you will see my best work on architectural visualization in Unreal Engine. I create projects in Unreal Engine. I customize renderings of interiors and exteriors.',
                'I create video presentation of real estate, interactive projects for personal computers as well as VR projects. You can see the quality of visualization and experience of my work in the examples.',
            ],
        },
        {
            id: 2,
            label: '3D Modeling & Visualization',
            description: [],
        },
    ];

    const chooseChapterTimeout = (value: ActiveChapterType) => setTimeout(() => chooseChapter(value), 150, value);

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
                {!isMobile && (
                    <NavigationItemsWrapperStyled>
                        <NavigationGradientContainerStyled $left>
                            <Gradient angle={-90}/>
                        </NavigationGradientContainerStyled>
                        <NavigationItemsContainerStyled>
                            {windowSize.width > 1024
                                ? chapters.map(chapter =>
                                    <NavigationItem
                                        key={chapter.id}
                                        chapter={chapter}
                                        activeChapter={activeChapter}
                                        chooseChapter={chooseChapter}
                                    />
                                )
                                : chapters.map(chapter => <NavigationItemStyled
                                        key={chapter.id}
                                        $isActive={chapter.label === activeChapter}
                                        onClick={() => chooseChapterTimeout(chapter.label)}
                                    >
                                        {chapter.label}
                                    </NavigationItemStyled>
                                )
                            }
                        </NavigationItemsContainerStyled>
                        <NavigationGradientContainerStyled $right>
                            <Gradient angle={90}/>
                        </NavigationGradientContainerStyled>
                    </NavigationItemsWrapperStyled>
                )}
            </TitleAndChaptersContainerStyled>
            {description.length > 0 && <DescriptionContainerStyled>
                {description.map(text => <div key={text}>
                    {text}
                </div>)}
            </DescriptionContainerStyled>}
        </NavigationContainerStyled>
    );
};
