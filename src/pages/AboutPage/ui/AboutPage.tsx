import cls from "./AboutPage.module.scss"
import classNames from "classnames"

interface AboutPageProps {
    className?: string;
}

const AboutPage = (props: AboutPageProps) => {
    const {className} = props
    return (
        <div className={classNames(cls["about-page"], {}, [className])}>
            AboutPage
        </div>
    );
};

export default AboutPage;