import cls from "./ProjectsList.module.scss"
import classNames from "classnames";
import {SectionHeader} from "shared/ui/SectionHeader";
import {Project, ProjectItem} from "../ProjectItem/ProjectItem";
import {useMemo} from "react";
import {ProjectsData} from "entities/Projects";

interface ProjectsListProps {
    className?: string;
    projects?: Project[]
}

export const ProjectsList = (props: ProjectsListProps) => {
    const {className, projects} = props;

    const projectsList = projects || ProjectsData

    const printProjectItems = useMemo(() => {
        return projectsList?.map(project => <ProjectItem project={project} key={project.id}/>)
    }, [projects])

    return (
        <section className={classNames(cls["projects-list"], className)}>
            <SectionHeader
                title="Projects"
                subtitle="Things I’ve built so far"
            />
            <article className={cls["projects-list__project-item-container"]}>
                {printProjectItems}
            </article>
        </section>
    );
};