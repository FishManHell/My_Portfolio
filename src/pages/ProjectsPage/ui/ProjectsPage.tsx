import cls from "./ProjectsPage.module.scss"
import classNames from "classnames";
import {ProjectsData, ProjectsList} from "entities/Projects";

interface ProjectsPageProps {
    className?: string;
}

const ProjectsPage = (props: ProjectsPageProps) => {
    const {className} = props
    return (
        <div className={classNames(cls["projects-page"], className)}>
            <ProjectsList projects={ProjectsData}/>
        </div>
    );
};

export default ProjectsPage;