import cls from "./Home.module.scss"
import classNames from "classnames"
import {Introduction} from "shared/ui/Introduction/Introduction";
import {ProjectsList as Projects} from "entities/Projects";
import {TechStack} from "widgets/TechStack";
import {Footer} from "widgets/Footer";
import {useMultiFetch} from "shared/libs/hooks/useMultiFetch";
import {TechStackItem} from "widgets/TechStack";
import {Project} from "entities/Projects";

interface HomePageProps {
    className?: string;
}

const HomePage = (props: HomePageProps) => {
    const {className} = props;
    const {results, loading, error} = useMultiFetch<[TechStackItem[], Project[]]>([
        {method: 'get', url: '/tech_stacks'},
        {method: 'get', url: '/projects'}
    ])


    return (
        <div className={classNames(cls["home"], className)}>
            <Introduction/>
            <TechStack techStackList={results?.[0]}/>
            <Projects projects={results?.[1]}/>
            <Footer/>
        </div>
    );
};

export default HomePage;