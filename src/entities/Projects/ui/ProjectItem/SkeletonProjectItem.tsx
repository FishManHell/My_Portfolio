import cls from "./ProjectItem.module.scss"
import {Card} from "shared/ui/Card/Card";
import {Skeleton} from "shared/ui/Skeleton";
import classNames from "classnames";

interface SkeletonProjectItemProps {
    className?: string;
}

export const SkeletonProjectItem = ({className}: SkeletonProjectItemProps) => {
    return (
        <Card className={classNames(cls["project-item"], cls["project-item-skeleton"], className)}>
            <header className={cls["project-item-header"]}>
                <Skeleton height={240} className={cls["project-item-header"]}/>
            </header>

            <article className={cls["project-item-content"]}>
                <header className={cls["project-item-content-header"]}>
                    <Skeleton width={"100%"} height={30}/>
                </header>

                <section className={cls["project-item-content-section"]}>
                    <Skeleton width={"100%"} height={100}/>
                </section>

                <footer className={cls["project-item-footer"]}>
                    <Skeleton width={"45%"} height={30}/>
                    <Skeleton width={"45%"} height={30}/>
                </footer>
            </article>
        </Card>
    )
};
