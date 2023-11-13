import {useEffect, useState} from 'react';
import {useWindowSize} from '../../hooks/useWindowsize';

import {MainPageDesktop} from './MainPageDesktop.tsx';
import {MainPageMobile} from './MainPageMobile.tsx';

const MainPage = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width && windowSize.width >= 880) {
            setIsMobile(false);
        }
        if (windowSize.width && windowSize.width < 880) {
            setIsMobile(true);
        }
    }, [windowSize, isMobile]);

    return (
        <>
            {isMobile ? <MainPageMobile/> : <MainPageDesktop/>}
        </>
    );
};

export default MainPage;
