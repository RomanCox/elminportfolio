import {useState, useRef, useEffect } from 'react';

import {ActiveChapterType} from './PortfolioPage.tsx';
import {ChapterType} from './PortfolioNavigation.tsx';

import {NavigationItemStyled} from './PortfolioPage.styled.ts';

interface NavigationItemPropsType {
    chapter: ChapterType;
    activeChapter: ActiveChapterType;
    chooseChapter: (value: ActiveChapterType) => void;
}

export const NavigationItem = ({chapter, activeChapter, chooseChapter}: NavigationItemPropsType) => {
    const [width, setWidth] = useState<number>(0);

    const spanRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (spanRef.current) {
            setWidth(spanRef.current.getBoundingClientRect().width);
        }
    }, [spanRef.current?.getBoundingClientRect().width]);

    return (
        <NavigationItemStyled
            $isActive={chapter.label === activeChapter}
            onClick={() => chooseChapter(chapter.label)}
            $width={width}
        >
            <span ref={spanRef}>
                {chapter.label}
            </span>
            <span ref={spanRef}>
                {chapter.label}
            </span>
        </NavigationItemStyled>
    )
}
