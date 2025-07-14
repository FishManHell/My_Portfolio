import cls from "./NavbarItem.module.scss"
import classNames from "classnames"
import {INavbarLink} from "../../module/types/navbar";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {memo} from "react";

interface NavbarLinkProps {
    item: INavbarLink
    className?: string;
}

export const NavbarLink = memo((props: NavbarLinkProps) => {
    const {className, item: {path, text}} = props;

    return (
        <AppLink className={classNames(cls["navbar-link-item"], className)} to={path}>
            <span className={cls["navbar-link-item-text"]}>
                {text}
            </span>
        </AppLink>
    );
});