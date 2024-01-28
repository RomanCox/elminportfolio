import {VideoContent} from './VideoContent.tsx';
import {ModellingContent} from './ModellingContent.tsx';

import {MobilePropsType} from '../../App.tsx';
import {AllContentContainerStyled} from './PortfolioPage.styled.ts';

interface PortfolioContentPropsType extends MobilePropsType {
    activeChapter: string;
}

export interface ScrollPropsType extends MobilePropsType {
    isScroll?: boolean;
}

export const PortfolioContent = ({isMobile, activeChapter}: PortfolioContentPropsType) => {

    return (
        <>{
            activeChapter === 'Interactive & Animation' ? <AllContentContainerStyled><VideoContent isMobile={isMobile} /></AllContentContainerStyled>
                : activeChapter === '3D Modeling & Visualization' ? <ModellingContent isMobile={isMobile} />
                    : <AllContentContainerStyled>
                        <VideoContent isMobile={isMobile} isScroll={activeChapter === 'View All'}/>
                        <ModellingContent isMobile={isMobile} isScroll={activeChapter === 'View All'}/>
                    </AllContentContainerStyled>
        }</>

    );
};
