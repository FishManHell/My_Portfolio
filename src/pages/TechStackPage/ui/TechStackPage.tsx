import cls from "./TechStackPage.module.scss"
import classNames from "classnames";
import {TechStack} from "widgets/TechStack";

interface TechStackPageProps {
    className?: string;
}

const TechStackPage = (props: TechStackPageProps) => {
    const {className} = props
    return (
        <div className={classNames(cls["tech-stack-page"], className)}>
            <TechStack/>
        </div>
    );
};

export default TechStackPage;