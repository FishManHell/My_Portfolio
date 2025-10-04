import classNames from "classnames";
import {Footer} from "widgets/Footer";

interface ContactPageProps {
    className?: string;
}

const ContactPage = (props: ContactPageProps) => {
    const {className} = props;

    return (
        <div className={classNames("contact-page", className)}>
            <div>
                Soon
            </div>

            <Footer/>
        </div>
    );
};


export default ContactPage;