import cls from "./Card.module.scss"
import classNames from "classnames";
import {ReactNode} from "react";

export enum CardTheme {
    NORMAL = "normal",
}

interface CardProps {
    className?: string;
    children?: ReactNode;
    theme?: string;
}

export const Card = (props: CardProps) => {
    const {className, theme = CardTheme.NORMAL, children} = props;

    return (
        <div className={classNames(cls["card"], [className, cls[theme]])}>
            {children}
        </div>
    );
};