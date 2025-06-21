import cls from "./Introduction.module.scss"
import classNames from "classnames";

interface IntroductionProps {
    className?: string;
}

export const Introduction = (props: IntroductionProps) => {
    const {className} = props

    return (
        <div className={classNames(cls["introduction"], className)}>
            <h1 className={cls["introduction-title"]}>
                Hi 👋,
                My name is
                <span >Denys Zhyvotov</span>,
                I build things for web
            </h1>
        </div>
    );
};