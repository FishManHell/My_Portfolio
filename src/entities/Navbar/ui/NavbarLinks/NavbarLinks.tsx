import classNames from "classnames";
import {memo} from "react";
import {NavbarLink} from "../NavbarLink/NavbarLink";
import {NavbarItemsList} from "../../module/navbarLinks";

interface NavbarItemsProps {
    className?: string;
}

export const NavbarLinks = memo((props: NavbarItemsProps) => {
    const {className} = props;

    return (
        <section className={classNames("navbar-links", className)} data-testid={"navbar-links"}>
            {NavbarItemsList.map(item => <NavbarLink item={item} key={item.path}/>)}
        </section>
    );
});