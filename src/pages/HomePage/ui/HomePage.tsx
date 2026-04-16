import cls from "./Home.module.scss"
import classNames from "classnames"
import {Introduction} from "shared/ui/Introduction";
import {ProjectsList as Projects} from "entities/Projects";
import {TechStack} from "widgets/TechStack";
import {Footer} from "widgets/Footer";
import {useMultiFetch} from "shared/libs/hooks";
import {TechStackItem} from "widgets/TechStack";
import {Project} from "entities/Projects";
import {useMemo} from "react";
import {sortByCreatedAtDesc} from "helpers/sortByCreatedAtDesc";

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

    const projects = useMemo(() => {
        const list = finalResults?.[1];
        if (!list) return [];

        return sortByCreatedAtDesc(list)
    }, [finalResults])

    return (
        <div className={classNames(cls["home"], className)}>
            <Introduction/>
            <TechStack techStackList={finalResults?.[0]} techStackLoading={loading}/>
            <Projects projects={projects} projectsLoading={loading}/>
            <Footer/>
        </div>
    );
};

export default HomePage;