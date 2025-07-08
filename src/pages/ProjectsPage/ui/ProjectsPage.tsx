import cls from "./ProjectsPage.module.scss"
import classNames from "classnames";
import {ProjectsList} from "entities/Projects";
import {useFetch} from "shared/libs/hooks/useFetch";

interface ProjectsPageProps {
    className?: string;
}

const ProjectsPage = (props: ProjectsPageProps) => {
    const {className} = props;
    const {data: projects, loading, error} = useFetch({method: "get", endpoint: "/projects"});

    return (
        <div className={classNames(cls["projects-page"], className)}>
            <ProjectsList projects={projects} className={cls["projects-page-list"]}/>
        </div>
    );
};

export default ProjectsPage;