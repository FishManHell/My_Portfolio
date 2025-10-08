import cls from "./HamburgerComponent.module.scss";
import {useCallback, useState} from "react";
import {Modal} from "shared/ui/Modal";
import {NavbarLinks} from "entities/Navbar";
import {BurgerMenu} from "widgets/Navbar";
import {NavbarActions} from "shared/ui/NavbarActions";

export const HamburgerComponent = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const onToggle = () => setOpen(prevOpen => !prevOpen);
    const onClose = useCallback(() => setOpen(false), []);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} className={cls['burger-navbar']} data-testid="hamburger">
                <NavbarLinks className={cls["navbar-links-container"]}/>
            </Modal>
            <NavbarActions isOpenBurgerMenu={isOpen}/>
            <BurgerMenu onToggle={onToggle} isOpen={isOpen}/>
        </>
    )
}