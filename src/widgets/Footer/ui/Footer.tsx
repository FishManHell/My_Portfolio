import cls from "./Footer.module.scss"
import classNames from "classnames";
import {Icon} from "shared/ui/Icon";
import LinkedInIcon from "shared/assets/icons/Linkedin.svg";

export const phoneContact = "+972532201230";
export const emailContact = "denyszhyvotov@gmail.com";
export const linkedInContact = "https://www.linkedin.com/in/denys-zhyvotov-8683611b9/";

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const {className} = props

    return (
        <footer className={classNames(cls["footer"], className)} data-testid={'footer'}>
            <section className={cls['footer-contacts']}>
                <a href={`tel:${phoneContact}`} className={classNames(cls['footer-contacts-link'], cls['phone-link'])}>
                    {phoneContact}
                </a>
                <a href={`mailto:${emailContact}`} className={classNames(cls['footer-contacts-link'], cls['email-link'])}>
                    {emailContact}
                </a>
                <a href={linkedInContact} className={classNames(cls['footer-contacts-link'], cls['social-link'])} target={'_black'}>
                    <Icon Svg={LinkedInIcon}/>
                </a>
            </section>
        </footer>
    );
};