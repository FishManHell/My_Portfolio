import cls from "./Introduction.module.scss"
import classNames from "classnames";

interface IntroductionProps {
    className?: string;
}

export const Introduction = (props: IntroductionProps) => {
    const {className} = props;

    return (
        <div className={classNames(cls["introduction"], className)} data-testid="introduction">
            <h1 className={cls["introduction-title"]}>
                Hi <span>👋</span> I’m Denys Zhyvotov, a Front-End / Full-Stack Engineer building modern web applications.
            </h1>
        </div>
    );
};