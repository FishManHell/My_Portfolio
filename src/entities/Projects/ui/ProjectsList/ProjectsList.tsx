import cls from "./ProjectsList.module.scss"
import classNames from "classnames";
import {SectionHeader} from "shared/ui/SectionHeader";
import {ProjectItem} from "../ProjectItem/ProjectItem";
import {useMemo} from "react";
import {Project} from "../../module/types/project";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsive} from "../../mocks/projectListResponsive";

export interface ProjectsListProps {
    className?: string;
    projects?: Project[];
    projectsLoading?: boolean;
}


export const ProjectsList = (props: ProjectsListProps) => {
    const {className, projects, projectsLoading} = props;

    const printProjectItems = useMemo(() => {
        return projects?.map(project => <ProjectItem project={project} key={project.id}/>)
    }, [projects]);

    return (
        <section className={classNames(cls["projects-list"], className)} data-testid="projects-list">
            <SectionHeader title="Projects" subtitle="Things I’ve built so far"/>

            <Carousel
                partialVisible
                slidesToSlide={1}
                infinite
                keyBoardControl
                draggable={false}
                swipeable
                responsive={responsive}
                containerClass={cls["projects-list-carousel-container"]}
                itemClass={cls["projects-list-carousel-container-item"]}
            >
                {projectsLoading && [1, 2, 3].map(i => <ProjectItem loading key={i} />)}
                {!projectsLoading && printProjectItems}
            </Carousel>

        </section>

    );
};