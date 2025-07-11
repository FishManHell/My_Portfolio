import {Navbar} from "widgets/Navbar";
import {Suspense} from "react";
import {AppRouter} from "app/providers/router/AppRouter/ui/AppRouter";

export const App = () => {
    return (
        <div className={"app"}>
            <Suspense fallback="">
                <Navbar/>
                <AppRouter/>
            </Suspense>
        </div>
    );
};