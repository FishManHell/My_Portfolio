import {CSSProperties} from "react";
import cls from "./Skeleton.module.scss"
import classNames from "classnames";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {className, height, width, border} = props;

    const styles: CSSProperties = {
        height,
        width,
        borderRadius: border,
    }

    return <div className={classNames(cls["skeleton"], className)} style={styles} data-testid="skeleton"/>;
};