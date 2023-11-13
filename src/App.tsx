import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {MainPageAsync} from './pages/mainPage';
import {Layout} from './components/layout';
import {HomePageAsync} from './pages/homePage';
import {AboutPageAsync} from './pages/aboutPage';
import {PortfolioPageAsync} from './pages/portfolioPage';
import {ServicesPageAsync} from './pages/servicesPage';
import {ContactsPageAsync} from './pages/contactsPage';
import {NotFoundPageAsync} from './pages/notFoundPage';

import {AppContainerStyled} from './App.styled.ts';

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

    return (
        <AppContainerStyled>
            {/*TODO create <Loading/>*/}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={PATH.MAIN} element={<MainPageAsync/>}/>
                    <Route path={PATH.MAIN} element={<Layout/>}>
                        <Route path={PATH.HOME} element={<HomePageAsync/>}/>
                        <Route path={PATH.ABOUT} element={<AboutPageAsync/>}/>
                        <Route path={PATH.PORTFOLIO} element={<PortfolioPageAsync/>}/>
                        <Route path={PATH.SERVICES} element={<ServicesPageAsync/>}/>
                        <Route path={PATH.CONTACTS} element={<ContactsPageAsync/>}/>
                        <Route path={PATH.NOTFOUND} element={<NotFoundPageAsync/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </AppContainerStyled>
    )
}

