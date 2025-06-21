import cls from "./ThemeSwitcher.module.scss"
import classNames from "classnames"
import {useTheme} from "app/providers/ThemeProvider";
import {Button} from "shared/ui/Button";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(cls["theme-switcher"], className)}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};