import classNames from "classnames";
import cls from "./TechStack.module.scss"
import {SectionHeader} from "shared/ui/SectionHeader";
import {Icon} from "shared/ui/Icon";
import {techStacksIconCollection} from "../model/mock/tech_stacks";
import {TechStackItem} from "../model/types/types";

interface TechStackProps {
    className?: string;
    techStackList?: TechStackItem[];
}

export const TechStack = (props: TechStackProps) => {
    const {className, techStackList} = props;

    return (
        <div className={classNames(cls["tech-stack"], {}, [className])}>
            <SectionHeader
                title="Tech Stack"
                subtitle={"Technologies I’ve been working with recently"}
            />
            <div className={cls["tech-stack-icons-container"]}>
                {techStackList?.map(({icon_key, id}) => {
                    if (techStacksIconCollection[icon_key]) {
                        return (
                            <Icon
                                Svg={techStacksIconCollection[icon_key]}
                                className={classNames(cls['tech-stack-icons-container-icon'], cls[icon_key])}
                                key={id}
                            />
                        )
                    }
                })}
            </div>
        </div>
    );
};