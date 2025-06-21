import cls from "./ContactPage.module.scss"
import classNames from "classnames";
import {Footer} from "widgets/Footer";

interface ContactPageProps {
    className?: string;
}

const ContactPage = (props: ContactPageProps) => {
    const {className} = props
    return (
        <div className={classNames(cls["contact-page"], {}, [className])}>
            <div>

            </div>

            <Footer/>
        </div>
    );
};


export default ContactPage;