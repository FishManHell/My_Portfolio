import {RouteProps} from "react-router-dom";
import {HomePage} from "pages/HomePage";
import {TechStackPage} from "pages/TechStackPage";
import {ProjectsPage} from "pages/ProjectsPage";
import {ContactPage} from "pages/ContactPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRouters {
    HOME= 'home',
    ABOUT= 'about',
    TECH_STACK= 'tech_stack',
    PROJECTS= 'projects',
    // CONTACT= 'contact',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.TECH_STACK]: '/tech_stack',
    [AppRouters.PROJECTS]: '/projects',
    // [AppRouters.CONTACT]: '/contact',
}

export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.HOME]: {
        path: RoutePath.home,
        element: <HomePage/>,
    },
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRouters.TECH_STACK]: {
        path: RoutePath.tech_stack,
        element: <TechStackPage/>
    },
    [AppRouters.PROJECTS]: {
        path: RoutePath.projects,
        element: <ProjectsPage/>
    },
    // [AppRouters.CONTACT]: {
    //     path: RoutePath.contact,
    //     element: <ContactPage/>
    // }
}