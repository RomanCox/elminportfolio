import {useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {BurgerMenu} from '../burgerMenu';
import {Header} from '../header';
import {Footer} from '../footer';
import {PATH} from '../../App.tsx';

export const Layout = () => {
    const [menuIsShow, setMenuIsShow] = useState<boolean>(false);

    const menuSwitch = () => {
        setMenuIsShow(!menuIsShow);
    };

    const menuIsClose = () => {
        setMenuIsShow(false);
    };

    const location = useLocation();

    return (
        <>
            <BurgerMenu menuIsShow={menuIsShow} menuSwitch={menuSwitch} homePage={location.pathname === PATH.HOME}/>
            <Header menuIsShow={menuIsShow} menuSwitch={menuSwitch} menuIsClose={menuIsClose} homePage={location.pathname === PATH.HOME}/>
            <Outlet/>
            <Footer homePage={location.pathname === PATH.HOME} menuIsClose={menuIsClose}/>
        </>
    )
}
