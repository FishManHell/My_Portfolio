import cls from "./TechStackPage.module.scss"
import classNames from "classnames";
import {TechStack, TechStackItem} from "widgets/TechStack";
import {useFetch} from "shared/libs/hooks/useFetch";

interface TechStackPageProps {
    className?: string;
    mockTechStacks?: TechStackItem[]
}

const TechStackPage = (props: TechStackPageProps) => {
    const {className, mockTechStacks} = props;
    const {data: techStackList, loading, error} = useFetch<TechStackItem[]>({method: "get", endpoint: "/tech_stacks"});

    const result = mockTechStacks ??  techStackList;

    return (
        <div className={classNames(cls["tech-stack-page"], className)}>
            <TechStack techStackList={result}/>
        </div>
    );
};

export default TechStackPage;