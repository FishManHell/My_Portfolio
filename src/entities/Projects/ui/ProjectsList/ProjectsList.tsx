import cls from "./ProjectsList.module.scss"
import classNames from "classnames";
import {SectionHeader} from "shared/ui/SectionHeader";
import {ProjectItem} from "../ProjectItem/ProjectItem";
import {useMemo} from "react";
import {Project} from "../../module/types/project";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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

    // console.log(printProjectItems, "printProjectItems")
    //
    // const projectListRender = () => {
    //     if (projectsLoading) {
    //         return [1, 2, 3, 4].map(i => <ProjectItem loading key={i} />);
    //     }
    //
    //     if (printProjectItems.length > 0) {
    //         return printProjectItems;
    //     }
    //
    //
    //     return null
    //
    // };

    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 1161 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1160, min: 771 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 770, min: 0 },
            items: 1
        }
    };


    return (
        <section className={classNames(cls["projects-list"], className)}>
            <SectionHeader title="Projects" subtitle="Things I’ve built so far"/>

            <Carousel
                arrows
                responsive={responsive}
                containerClass={cls["projects-list_carousel_container"]}
                itemClass={cls["projects-list_carousel_container_item"]}
                partialVisible
                slidesToSlide={1}
                infinite
                keyBoardControl
                swipeable
                // removeArrowOnDeviceType={["mobile"]}
            >
                {projectsLoading && [1, 2, 3, 4].map(i => <ProjectItem loading key={i} />)}
                {!projectsLoading && printProjectItems?.length && printProjectItems}
            </Carousel>

        </section>

    );
};