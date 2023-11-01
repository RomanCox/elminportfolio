import {VideoContent} from './VideoContent.tsx';
import {ModellingContent} from './ModellingContent.tsx';
import {VRContent} from './VRContent.tsx';

interface PortfolioContentPropsType {
    activeChapter: string;
}

export const PortfolioContent = ({activeChapter}: PortfolioContentPropsType) => {

    return (
        <>{
            activeChapter === 'Interactive & Animation' ? <VideoContent/>
                : activeChapter === '3D Modeling & Visualization' ? <ModellingContent/>
                    : <VRContent/>
        }</>

    );
};
