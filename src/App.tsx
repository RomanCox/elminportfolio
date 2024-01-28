import {Suspense, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useWindowSize} from './hooks/useWindowsize';
import {MainPageAsync} from './pages/mainPage';
import {Layout} from './components/layout';
import {HomePageAsync} from './pages/homePage';
import {AboutPageAsync} from './pages/aboutPage';
import {PortfolioPageAsync} from './pages/portfolioPage';
import {ServicesPageAsync} from './pages/servicesPage';
import {ContactsPageAsync} from './pages/contactsPage';
import {NotFoundPageAsync} from './pages/notFoundPage';
import {Loading} from './components/loading/Loading.tsx';

import {AppContainerStyled} from './App.styled.ts';

export interface MobilePropsType {
    isMobile: boolean;
}

export const PATH = {
    MAIN: '/',
    HOME: '/home',
    ABOUT: '/about',
    PORTFOLIO: '/portfolio',
    SERVICES: '/services',
    CONTACTS: '/contacts',
    NOTFOUND: '/*',
    ADMIN: '/admin',
};

export const App = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width <= 500) {
            setIsMobile(true);
        }
        if (windowSize.width > 500) {
            setIsMobile(false);
        }
        document.documentElement.style.setProperty('--vh', `${windowSize.height * 0.01}px`);
    }, [windowSize]);

    return (
        <AppContainerStyled>
            {/*TODO create <Loading/>*/}
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path={PATH.MAIN} element={<MainPageAsync/>}/>
                    <Route path={PATH.MAIN} element={<Layout isMobile={isMobile}/>}>
                        <Route path={PATH.HOME} element={<HomePageAsync isMobile={isMobile}/>}/>
                        <Route path={PATH.ABOUT} element={<AboutPageAsync isMobile={isMobile}/>}/>
                        <Route path={PATH.PORTFOLIO} element={<PortfolioPageAsync isMobile={isMobile}/>}/>
                        <Route path={PATH.SERVICES} element={<ServicesPageAsync/>}/>
                        <Route path={PATH.CONTACTS} element={<ContactsPageAsync/>}/>
                        <Route path={PATH.NOTFOUND} element={<NotFoundPageAsync/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </AppContainerStyled>
    )
}

