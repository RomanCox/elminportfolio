import {VideoContent} from './VideoContent.tsx';
import {ModellingContent} from './ModellingContent.tsx';

import {AllContentContainerStyled} from './PortfolioPage.styled.ts';

interface PortfolioContentPropsType {
    activeChapter: string;
}

export interface ScrollPropsType {
    isScroll?: boolean;
}

export const PortfolioContent = ({activeChapter}: PortfolioContentPropsType) => {

    return (
        <>{
            activeChapter === 'Interactive & Animation' ? <AllContentContainerStyled><VideoContent /></AllContentContainerStyled>
                : activeChapter === '3D Modeling & Visualization' ? <ModellingContent />
                    : <AllContentContainerStyled>
                        <VideoContent isScroll={activeChapter === 'View All'}/>
                        <ModellingContent isScroll={activeChapter === 'View All'}/>
                    </AllContentContainerStyled>
        }</>

    );
};
