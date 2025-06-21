import cls from "./Home.module.scss"
import classNames from "classnames"
import {Introduction} from "shared/ui/Introduction/Introduction";
import {ProjectsList as Projects} from "entities/Projects";
import {TechStack} from "widgets/TechStack";
import {Footer} from "widgets/Footer";

interface HomePageProps {
    className?: string;
}

const HomePage = (props: HomePageProps) => {
    const {className} = props
    return (
        <div className={classNames(cls["home"], className)}>
            <Introduction/>
            <TechStack/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default HomePage;