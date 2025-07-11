import cls from "./BurgerMenu.module.scss"
import classNames from "classnames";
import {Button} from "shared/ui/Button";
import {memo} from "react";

interface BurgerMenuProps {
    className?: string;
    isOpen: boolean;
    onToggle: () => void;
}

export const BurgerMenu = memo((props: BurgerMenuProps) => {
    const {className, isOpen, onToggle} = props;

    return (
        <Button
            className={classNames(cls['burger-menu'], className, {[cls['active']]: isOpen})}
            onClick={onToggle}
        >
            <span className={cls['burger-menu-item']}/>
            <span className={cls['burger-menu-item']}/>
            <span className={cls['burger-menu-item']}/>
        </Button>
    )
})