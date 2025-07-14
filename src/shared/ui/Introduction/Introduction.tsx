import cls from "./Introduction.module.scss"
import classNames from "classnames";

interface IntroductionProps {
    className?: string;
}

export const Introduction = (props: IntroductionProps) => {
    const {className} = props;

    return (
        <div className={classNames(cls["introduction"], className)}>
            <h1 className={cls["introduction-title"]}>
                Hi <span>👋</span> My name is Denys Zhyvotov, and I&#39;m a Front-End Developer
            </h1>
        </div>
    );
};