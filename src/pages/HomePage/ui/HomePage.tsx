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
    mockResults?: [TechStackItem[], Project[]]; // only for storybook
}

const HomePage = (props: HomePageProps) => {
    const {className, mockResults} = props;
    const {results, loading, error} = useMultiFetch<[TechStackItem[], Project[]]>([
        {method: 'get', url: '/tech_stacks'},
        {method: 'get', url: '/projects'}
    ])

    const finalResults = mockResults ?? results;

    return (
        <div className={classNames(cls["home"], className)}>
            <Introduction/>
            <TechStack techStackList={finalResults?.[0]}/>
            <Projects projects={finalResults?.[1]}/>
            <Footer/>
        </div>
    );
};

export default HomePage;