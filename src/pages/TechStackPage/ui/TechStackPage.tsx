import cls from "./TechStackPage.module.scss"
import classNames from "classnames";
import {TechStack} from "widgets/TechStack";
import {useFetch} from "shared/libs/hooks/useFetch";

interface TechStackPageProps {
    className?: string;
}

const TechStackPage = (props: TechStackPageProps) => {
    const {className} = props;
    const {data: techStackList, loading, error} = useFetch({method: "get", endpoint: "/tech_stacks"});

    return (
        <div className={classNames(cls["tech-stack-page"], className)}>
            <TechStack techStackList={techStackList}/>
        </div>
    );
};

export default TechStackPage;