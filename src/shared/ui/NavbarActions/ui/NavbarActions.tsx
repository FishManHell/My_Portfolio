import cls from "./NavbarActions.module.scss";
import DownloadIcon from "shared/assets/icons/Download.svg";
import {Icon} from "shared/ui/Icon";
import LinkedInIcon from "shared/assets/icons/Linkedin.svg";
import GithubIcon from "shared/assets/icons/GitHub.svg";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import CV from "shared/assets/resource/CV_Denys_Zhyvotov.pdf";
import classNames from "classnames";

const LINKEDIN_LINK = "https://www.linkedin.com/in/denys-zhyvotov/";
const GITHUB_LINK = "https://github.com/FishManHell";

interface NavbarActionsProps {
    className?: string;
    isOpenBurgerMenu?: boolean;
}

export const NavbarActions = ({className, isOpenBurgerMenu}: NavbarActionsProps) => {

    const mods = {[cls["burger-navbar-actions-opened"]]: isOpenBurgerMenu}

    return (
        <div className={classNames(cls["navbar-actions"], className, mods)} data-testid="navbar-actions">
            <section className={cls["navbar-actions-icon-links-container"]}>
                <a
                    className={cls["navbar-actions-icon-links-container-download-cv"]}
                    download title={"Download CV"} href={CV || "#"}
                >
                    <DownloadIcon/>
                </a>
                <a
                    href={LINKEDIN_LINK}
                    className={cls["navbar-actions-icon-links-container-icon-link"]}
                    target={"_blank"}
                    rel={'noreferrer'}
                >
                    <Icon Svg={LinkedInIcon}/>
                </a>
                <a
                    href={GITHUB_LINK}
                    className={cls["navbar-actions-icon-links-container-icon-link"]}
                    target={"_blank"}
                    rel={'noreferrer'}
                >
                    <Icon Svg={GithubIcon}/>
                </a>
            </section>
            <ThemeSwitcher isOpenBurgerMenu={isOpenBurgerMenu}/>
        </div>
    )
}