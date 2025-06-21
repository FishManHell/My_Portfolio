import {INavbarLink} from "./types/navbar";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export const NavbarItemsList: INavbarLink[] = [
    {
        path: RoutePath.home,
        text: 'Home Page'
    },
    {
        path: RoutePath.about,
        text: 'About'
    },
    {
        path: RoutePath.tech_stack,
        text: 'Tech Stack'
    },
    {
        path: RoutePath.projects,
        text: 'Projects'
    },
    // {
    //     path: RoutePath.contact,
    //     text: 'Contact'
    // }
]