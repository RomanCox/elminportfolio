import {MouseEvent, useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {useWindowSize} from '../../hooks/useWindowsize';

import {MobilePropsType, PATH} from '../../App.tsx';
import {Sidebar} from '../Sidebar';
import {Header} from '../header';
import {Footer} from '../footer';
import {WrapperSidebarStyled} from "./Layout.styled.ts";

export const Layout = ({isMobile}: MobilePropsType) => {
    const [sidebarIsShow, setSidebarIsShow] = useState<boolean>(false);
    const [sidebarIsMount, setSidebarIsMount] = useState<boolean>(false);
    const [sidebarIndent, setSidebarIndent] = useState<number>(0);

    const sidebarOpen = () => {
        setSidebarIsMount(true);
        setSidebarIsShow(true);
    };

    const sidebarClose = () => {
        setSidebarIsShow(false);
        setTimeout(() => setSidebarIsMount(false), 500);
    };

    const sidebarCloseWithoutAnim = () => {
        setSidebarIsShow(false);
        setSidebarIsMount(false);
    };

    const onClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        sidebarClose();
    }

    const location = useLocation();

    const windowSize = useWindowSize();

    useEffect(() => {
        const value = (windowSize.width - 1920) / 2;

        if (windowSize.width > 1920) {
            setSidebarIndent(value);
        }
    }, [windowSize]);

    return (
        <>
            {location.pathname === PATH.HOME
                ? sidebarIsMount &&
                <Sidebar sidebarIsShow={sidebarIsShow} sidebarClose={sidebarCloseWithoutAnim}
                         homePage={location.pathname === PATH.HOME} sidebarIndent={sidebarIndent}/>
                : sidebarIsMount &&
                <WrapperSidebarStyled onClick={onClickHandler}>
                    <Sidebar sidebarIsShow={sidebarIsShow} sidebarClose={sidebarCloseWithoutAnim}
                             homePage={location.pathname === PATH.HOME} sidebarIndent={sidebarIndent}/>
                </WrapperSidebarStyled>
            }
            <Header sidebarIsShow={sidebarIsShow} sidebarOpen={sidebarOpen} sidebarClose={sidebarClose}
                    homePage={location.pathname === PATH.HOME} isMobile={isMobile}/>
            <Outlet/>
            <Footer homePage={location.pathname === PATH.HOME} isMobile={isMobile}/>
        </>
    )
}
