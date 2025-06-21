import {Suspense, useCallback} from 'react';
import {Route, RouteProps, Routes} from 'react-router-dom';
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {

    const renderWithWrapper = useCallback((route: RouteProps) => {
        const {element, path} = route;

        const suspenseWrapper = (
            <Suspense fallback="...loading">
                {element}
            </Suspense>
        )
        return <Route element={suspenseWrapper} key={path} path={path}/>
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};