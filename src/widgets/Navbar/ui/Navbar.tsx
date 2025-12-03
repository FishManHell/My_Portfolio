import cls from "./Navbar.module.scss";
import classNames from "classnames";
import {NavbarLinks} from "entities/Navbar";
import {ResizeContainer} from "shared/ui/ResizeContainer/ui/ResizeContainer";
import {HamburgerComponent} from "features/HamburgerComponent";
import {NavbarActions} from "shared/ui/NavbarActions";

const BODY_PADDING = 10
const MIN_SIZE = 600

const MIN_CONTENT_WIDTH = MIN_SIZE - BODY_PADDING * 2;

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {className} = props;

    return (
        <ResizeContainer
            refreshMode={'throttle'}
            refreshRate={450}
            className={classNames(cls["navbar"], className)}
            renderContent={(width) => {
                if (width <= MIN_CONTENT_WIDTH) return <HamburgerComponent/>
                return (
                    <>
                        <NavbarLinks/>
                        <NavbarActions/>
                    </>
                )
        }}/>
    );
};