import {useState, useRef, useEffect } from 'react';

import {ActiveChapterType} from './PortfolioPage.tsx';
import {ChapterType} from './PortfolioNavigation.tsx';

import {NewNavigationItemStyled} from './PortfolioPage.styled.ts';

interface NavigationItemPropsType {
    chapter: ChapterType;
    activeChapter: ActiveChapterType;
    chooseChapter: (value: ActiveChapterType) => void;
}


export const NavigationItem = ({chapter, activeChapter, chooseChapter}: NavigationItemPropsType) => {
    const [width, setWidth] = useState<number>(0);

    const span = useRef<HTMLInputElement>(null);

    const onClickHandler = () => setTimeout(() => chooseChapter(chapter.label), 150, chapter.label)

    useEffect(() => {
        if (span.current) {
            setWidth(span.current.getBoundingClientRect().width);
        }
    }, [span.current?.getBoundingClientRect().width]);

    return (
        <NewNavigationItemStyled
            $isActive={chapter.label === activeChapter}
            onClick={onClickHandler}
            $width={width}
        >
            <span ref={span}>
                {chapter.label}
            </span>
            <span ref={span}>
                {chapter.label}
            </span>
        </NewNavigationItemStyled>
    )
}
