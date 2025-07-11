import cls from "./NavbarActions.module.scss";
import DownloadIcon from "shared/assets/icons/Download.svg";
import {Icon} from "shared/ui/Icon";
import LinkedInIcon from "shared/assets/icons/Linkedin.svg";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

const linkedInLink = "https://www.linkedin.com/in/denys-zhyvotov-8683611b9/";
const downloadLink = '/cv/CV_Denys_Zhyvoto_Front-End Developer.pdf';

export const NavbarActions = () => {
    return (
        <div className={cls["navbar-actions"]}>
            <section className={cls["navbar-actions-icon-links-container"]}>
                <a
                    className={cls["navbar-actions-icon-links-container-download-cv"]}
                    download title={"Download CV"} href={downloadLink}
                >
                    <DownloadIcon/>
                </a>
                <a href={linkedInLink} className={cls["navbar-actions-icon-links-container-icon-link"]}>
                    <Icon Svg={LinkedInIcon}/>
                </a>
            </section>
            <ThemeSwitcher/>
        </div>
    )
}