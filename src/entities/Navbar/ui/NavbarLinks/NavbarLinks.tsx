import cls from "./NavbarItems.module.scss";
import classNames from "classnames";
// import {INavbarLink} from "../../module/types/navbar";
import {memo} from "react";
import {NavbarLink} from "../NavbarLink/NavbarLink";
import {NavbarItemsList} from "../../module/navbarLinks";

interface NavbarItemsProps {
    className?: string;
    // navbarLinks: INavbarLink[]
}

export const NavbarLinks = memo((props: NavbarItemsProps) => {
    const {className} = props;

    return (
        <section className={classNames(cls["navbar-items"], className)}>
            {NavbarItemsList.map(item => <NavbarLink item={item} key={item.path}/>)}
        </section>
    );
});