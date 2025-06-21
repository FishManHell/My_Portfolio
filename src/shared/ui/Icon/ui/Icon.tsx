import cls from "./Icon.module.scss"
import classNames from "classnames";
import {FC, SVGProps} from "react";

interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
    const {className, Svg} = props;

    return <Svg className={classNames(cls["icon"], className)} />;
};