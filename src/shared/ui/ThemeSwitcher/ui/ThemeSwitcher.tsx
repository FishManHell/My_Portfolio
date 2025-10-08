import cls from "./ThemeSwitcher.module.scss"
import classNames from "classnames"
import {useTheme} from "app/providers/ThemeProvider";
import {Button} from "shared/ui/Button";
import {Icon} from "shared/ui/Icon";
import ThemeIcon from "shared/assets/icons/Theme.svg"


interface ThemeSwitcherProps {
    className?: string;
    isOpenBurgerMenu?: boolean;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className, isOpenBurgerMenu} = props;
    const {toggleTheme} = useTheme();

    const mods = {[cls['theme-switcher-opened-burger-menu']]: isOpenBurgerMenu}

    return (
        <Button
            className={classNames(cls["theme-switcher"], className, mods)}
            onClick={toggleTheme}
        >
            <Icon Svg={ThemeIcon} className={cls["theme-switcher-icon"]}/>
        </Button>
    );
};