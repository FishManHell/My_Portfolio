import cls from "./ProjectsList.module.scss"
import classNames from "classnames";
import {SectionHeader} from "shared/ui/SectionHeader";
import {ProjectItem} from "../ProjectItem/ProjectItem";
import {useMemo} from "react";
import {Project} from "../../module/types/project";

interface ProjectsListProps {
    className?: string;
    projects?: Project[];
    projectsLoading?: boolean;
}

export const ProjectsList = (props: ProjectsListProps) => {
    const {className, projects, projectsLoading} = props;

    const printProjectItems = useMemo(() => {
        return projects?.map(project => <ProjectItem project={project} key={project.id}/>)
    }, [projects]);

    const ProjectListRenderer = () => {
        if (projectsLoading) {
            return (
                <article className={cls["projects-list-project-item-container"]}>
                    <ProjectItem loading/>
                    <ProjectItem loading/>
                    <ProjectItem loading/>
                    <ProjectItem loading/>
                </article>
            )
        }
        return (
            <article className={cls["projects-list-project-item-container"]}>
                {printProjectItems}
            </article>
        )
    }

    return (
        <section className={classNames(cls["projects-list"], className)}>
            <SectionHeader title="Projects" subtitle="Things I’ve built so far"/>
            <ProjectListRenderer/>
        </section>
    );
};