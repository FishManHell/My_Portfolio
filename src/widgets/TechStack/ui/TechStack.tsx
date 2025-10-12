import classNames from "classnames";
import cls from "./TechStack.module.scss"
import {SectionHeader} from "shared/ui/SectionHeader";
import {Icon} from "shared/ui/Icon";
import {techStacksIconCollection} from "../model/mock/tech_stacks";
import {TechStackItem} from "../model/types/types";
import {Skeleton} from "shared/ui/Skeleton";

interface TechStackProps {
    className?: string;
    techStackList?: TechStackItem[];
    techStackLoading?: boolean;
}

const TechStackSkeleton = () => {
    return Array.from({length: 10}).map((_, index) => {
        return (
            <Skeleton
                key={index}
                width={120}
                height={120}
                border={"10px"}
                className={cls['tech-stack-icons-container-skeleton-item']}
            />
        )
    })
}

export const TechStack = (props: TechStackProps) => {
    const {className, techStackList, techStackLoading} = props;

    return (
        <div className={classNames(cls["tech-stack"], className)} data-testid="tech-stack">
            <SectionHeader
                title="Tech Stack"
                subtitle={"Technologies I’ve been working with recently"}
            />
            <div className={cls["tech-stack-icons-container"]} >
                {techStackLoading && <TechStackSkeleton/>}
                {techStackList && techStackList?.map(({name}) => {
                   return (
                       <Icon
                           Svg={techStacksIconCollection[name]}
                           className={classNames(cls['tech-stack-icons-container-icon'], cls[name])}
                           key={name}
                       />
                   )
                })}
            </div>
        </div>
    );
};