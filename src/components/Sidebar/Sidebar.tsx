import {PATH} from '../../App.tsx';

import {SidebarContainerStyled, NavbarItemStyled, NavbarStyled} from './Sidebar.styled.ts';
import {useEffect, useState} from "react";

interface SidebarPropsType {
    sidebarIsShow: boolean;
    sidebarClose: () => void;
    homePage: boolean;
    isMobile?: boolean;
    sidebarIndent?: number;
}

export const Sidebar = (props: SidebarPropsType) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    const {sidebarIsShow, sidebarClose, homePage, isMobile = false, sidebarIndent = 0} = props;

    useEffect(() => {
        setIsShow(sidebarIsShow)
    }, [sidebarIsShow]);

    return (
        <SidebarContainerStyled $sidebarIsShow={isShow} $homePage={homePage} $sidebarIndent={sidebarIndent}
                                $isMobile={isMobile}>
            <NavbarStyled $homePage={homePage} onClick={sidebarClose}>
                {!homePage && <NavbarItemStyled to={PATH.HOME} $homePage={homePage}>
                    Home
                </NavbarItemStyled>}
                <NavbarItemStyled to={PATH.ABOUT} $homePage={homePage} onClick={sidebarClose}>
                    About
                </NavbarItemStyled>
                <NavbarItemStyled to={PATH.PORTFOLIO} $homePage={homePage} onClick={sidebarClose}>
                    Portfolio
                </NavbarItemStyled>
                <NavbarItemStyled to={PATH.SERVICES} $homePage={homePage} onClick={sidebarClose}>
                    Services
                </NavbarItemStyled>
                <NavbarItemStyled to={PATH.CONTACTS} $homePage={homePage} onClick={sidebarClose}>
                    Contacts
                </NavbarItemStyled>
            </NavbarStyled>
        </SidebarContainerStyled>
    )
};
