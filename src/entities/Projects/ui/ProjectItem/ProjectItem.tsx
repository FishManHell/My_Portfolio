import cls from "./ProjectItem.module.scss";
import classNames from "classnames";
import {Card} from "shared/ui/Card/Card";
import {memo} from "react";
import {Icon} from "shared/ui/Icon";
import {Project} from "../../module/types/project";

interface ProjectItemProps {
    className?: string;
    project: Project
}

export const ProjectItem = memo((props: ProjectItemProps) => {
    const {className, project} = props;

    return (
        <Card className={classNames(cls["project-item"], className)}>
            <header className={cls["project-item-header"]}>
                <img src={project?.img} alt="project-img"/>
            </header>
            <article className={cls["project-item-content"]}>
                <header className={cls["project-item-content-header"]}>
                    <h3>{project?.title}</h3>
                </header>
                <section className={cls["project-item__content__section"]}>
                    <p>{project?.description}</p>
                </section>
                <footer className={cls["project-item-content-footer"]}>
                    <p
                        className={cls["project-item-content-footer-tech-stack"]}
                    >
                        Tech stack:
                        <span className={cls["project-item-content-footer-tech-stack-item"]}>
                            {project?.techStackList.join(', ')}
                        </span>
                    </p>
                </footer>
            </article>
            <footer className={cls["project-item-footer"]}>
                {project?.previewLinks.map(previewLink => (
                    <a href={previewLink.link} className={cls["project-item-footer-preview-link"]} key={previewLink.text}>
                        <Icon Svg={previewLink.icon}/>
                        {previewLink.text}
                    </a>
                ))}
            </footer>
        </Card>
    );
});