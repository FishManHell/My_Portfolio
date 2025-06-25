import cls from "./ProjectsPage.module.scss"
import classNames from "classnames";
import {ProjectsList} from "entities/Projects";

interface ProjectsPageProps {
    className?: string;
}

const ProjectsPage = (props: ProjectsPageProps) => {
    const {className} = props
    return (
        <div className={classNames(cls["projects-page"], className)}>
            <ProjectsList />
        </div>
    );
};

export default ProjectsPage;