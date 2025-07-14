import cls from "./ProjectItem.module.scss";
import classNames from "classnames";
import {Card} from "shared/ui/Card/Card";
import {memo} from "react";
import {Icon} from "shared/ui/Icon";
import {Project} from "../../module/types/project";
import {projectPreviewIconCollection} from "../../mocks/project_previews";
import {SkeletonProjectItem} from "./SkeletonProjectItem";

interface ProjectItemProps {
    className?: string;
    project?: Project;
    loading?: boolean;
}

export const ProjectItem = memo((props: ProjectItemProps) => {
    const {className, project, loading} = props;

    if (loading) return <SkeletonProjectItem/>

    return (
        <Card className={classNames(cls["project-item"], className)}>
            <header className={cls["project-item-header"]}>
                <img src={project?.img} alt="project-img"/>
            </header>
            <article className={cls["project-item-content"]}>
                <header className={cls["project-item-content-header"]}>
                    <h3>{project?.title}</h3>
                </header>
                <section className={cls["project-item-content-section"]}>
                    <p>{project?.description}</p>
                </section>
                <footer className={cls["project-item-content-footer"]}>
                    <p
                        className={cls["project-item-content-footer-tech-stack"]}
                    >
                        Tech stack:
                        <span className={cls["project-item-content-footer-tech-stack-item"]}>
                            {project?.tech_stack.join(', ')}
                        </span>
                    </p>
                </footer>
            </article>
            <footer className={cls["project-item-footer"]}>
                {project?.links.map(item => {
                    return (
                        <a href={item.link} className={cls["project-item-footer-preview-link"]} key={item.text}>
                            <Icon Svg={projectPreviewIconCollection[item.icon]}/>
                            {item.text}
                        </a>
                    )
                })}
            </footer>
        </Card>
    );
});