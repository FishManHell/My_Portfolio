import {Navbar} from "widgets/Navbar";
import {Suspense} from "react";
import {AppRouter} from "app/providers/router/AppRouter/ui/AppRouter";
import {useTheme} from "app/providers/ThemeProvider";

interface AppProps {
    className?: string;
}

export const App = (props: AppProps) => {
    const {className} = props;

    const {} = useTheme();

    return (
        <div className={"app"}>
            <Suspense fallback="">
                <Navbar/>
                <AppRouter/>
            </Suspense>
        </div>
    );
};