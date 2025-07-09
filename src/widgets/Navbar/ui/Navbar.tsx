import cls from "./Navbar.module.scss";
import classNames from "classnames";
import {Icon} from "shared/ui/Icon";
import LinkedInIcon from "shared/assets/icons/Linkedin.svg";
import {NavbarLinks} from "entities/Navbar";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import DownloadIcon from "shared/assets/icons/Download.svg";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {className} = props;

    const linkedInLink = "https://www.linkedin.com/in/denys-zhyvotov-8683611b9/"

    return (
        <header className={classNames(cls["navbar"], className)}>
            <NavbarLinks className={cls["navbar-links-container"]}/>
            <section className={cls["navbar-icon-links-container"]}>
                <a
                    download
                    className={cls['navbar-icon-links-container-download-cv']}
                    title={"Download CV"}
                    href={'/cv/CV_Denys_Zhyvoto_Front-End Developer.pdf'}
                >
                    <DownloadIcon/>
                </a>
                <a href={linkedInLink} className={cls["navbar-icon-links-container-icon-link"]}>
                    <Icon Svg={LinkedInIcon}/>
                </a>
            </section>
            <ThemeSwitcher/>
        </header>
    );
};