import {useEffect, useState} from 'react';

import {Title} from '../../components/title';
import {NavigationItem} from './NavigationItem.tsx';
// import {PhraseRotate} from '../../components/phraseRotate';

import {ActiveChapterType} from './PortfolioPage.tsx';

import {
    NavigationContainerStyled,
    TitleAndChaptersContainerStyled,
    TitleContainerStyled,
    NavigationItemsContainerStyled,
    // NavigationItemStyled,
    DescriptionContainerStyled,
} from './PortfolioPage.styled.ts';


interface AboutNavigationPropsType {
    activeChapter: ActiveChapterType;
    chooseChapter: (value: ActiveChapterType) => void;
}

export interface ChapterType {
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
                        // <NavigationItemStyled
                        //     key={chapter.id}
                        //     $isActive={chapter.label === activeChapter}
                        //     onClick={() => {
                        //         chooseChapter(chapter.label);
                        //     }}
                        // >
                        //     <div>
                        //         <PhraseRotate value={chapter.label}/>
                        //         {/*{chapter.label}*/}
                        //     </div>
                        // </NavigationItemStyled>
                        <NavigationItem
                            key={chapter.id}
                            chapter={chapter}
                            activeChapter={activeChapter}
                            chooseChapter={chooseChapter}
                        />
                    )}
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
