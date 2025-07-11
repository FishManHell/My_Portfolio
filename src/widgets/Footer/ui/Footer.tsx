import cls from "./Footer.module.scss"
import classNames from "classnames";
import {Icon} from "shared/ui/Icon";
import LinkedInIcon from "shared/assets/icons/Linkedin.svg";

const linkedInLink = "https://www.linkedin.com/in/denys-zhyvotov-8683611b9/";
const email = "denyszhyvotov@gmail.com";
const phone = "+972532201230";

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const {className} = props

    return (
        <footer className={classNames(cls["footer"], {}, [className])}>
            <section className={cls['footer-contacts']}>
                <a href={`tel:${phone}`} className={classNames(cls['footer-contacts-link'], cls['phone-link'])}>
                    {phone}
                </a>
                <a href={`mailto:${email}`} className={classNames(cls['footer-contacts-link'], cls['email-link'])}>
                    {email}
                </a>
                <a href={linkedInLink} className={classNames(cls['footer-contacts-link'], cls['social-link'])} target={'_black'}>
                    <Icon Svg={LinkedInIcon}/>
                </a>
            </section>
        </footer>
    );
};