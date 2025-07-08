import cls from "./ProjectsList.module.scss"
import classNames from "classnames";
import {SectionHeader} from "shared/ui/SectionHeader";
import {ProjectItem} from "../ProjectItem/ProjectItem";
import {useMemo} from "react";
import {Project} from "../../module/types/project";

interface ProjectsListProps {
    className?: string;
    projects?: Project[]
}

export const ProjectsList = (props: ProjectsListProps) => {
    const {className, projects} = props;

    const printProjectItems = useMemo(() => {
        return projects?.map(project => <ProjectItem project={project} key={project.id}/>)
    }, [projects]);

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