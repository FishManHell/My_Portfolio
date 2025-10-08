import cls from "./Icon.module.scss"
import classNames from "classnames";
import {FC, SVGProps} from "react";

export interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
    const {className, Svg} = props;

    return (
        <div data-testid="icon">
            <Svg className={classNames(cls["icon"], className)}/>
        </div>
    )
};