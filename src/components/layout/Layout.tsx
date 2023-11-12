import {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {BurgerMenu} from '../burgerMenu';
import {Header} from '../header';
import {Footer} from '../footer';
import {PATH} from '../../App.tsx';
import {useWindowSize} from "../../hooks/useWindowSize.ts";

export const Layout = () => {
    const [menuIsShow, setMenuIsShow] = useState<boolean>(false);
    const [menuIndent, setMenuIndent] = useState<number>(0);

    const menuSwitch = () => {
        setMenuIsShow(!menuIsShow);
    };

    const menuIsClose = () => {
        setMenuIsShow(false);
    };

    const location = useLocation();

    const windowSize = useWindowSize();

    useEffect(() => {
        const value = (windowSize.width - 1920) / 2;

        if (windowSize.width > 1920) {
            setMenuIndent(value);
        }
    }, [windowSize]);

    return (
        <>
            {
                location.pathname === PATH.HOME
                    ? <BurgerMenu menuIsShow={menuIsShow} menuSwitch={menuSwitch}
                                  homePage={location.pathname === PATH.HOME} menuIndent={menuIndent}/>
                    : menuIsShow && <BurgerMenu menuIsShow={menuIsShow} menuSwitch={menuSwitch}
                                                 homePage={location.pathname === PATH.HOME} menuIndent={menuIndent}/>
            }
            <Header menuIsShow={menuIsShow} menuSwitch={menuSwitch} menuIsClose={menuIsClose}
                    homePage={location.pathname === PATH.HOME}/>
            <Outlet/>
            <Footer homePage={location.pathname === PATH.HOME} menuIsClose={menuIsClose}/>
        </>
    )
}
