import classNames from "classnames";
import cls from "./TechStack.module.scss"
import {FC, SVGProps} from "react";
import {SectionHeader} from "shared/ui/SectionHeader";
import {Icon} from "shared/ui/Icon";
import HtmlIcon from "shared/assets/icons/Html.svg";
import CssIcon from "shared/assets/icons/Css.svg";
import SassIcon from "shared/assets/icons/Sass.svg";
import JSIcon from "shared/assets/icons/JS.svg";
import TSIcon from "shared/assets/icons/Typescript.svg";
import ReactIcon from "shared/assets/icons/React.svg";
import ReduxIcon from "shared/assets/icons/Redux.svg";
import GitIcon from "shared/assets/icons/Git.svg";
import GitHubIcon from "shared/assets/icons/GitHub.svg";
import WebstormIcon from "shared/assets/icons/Webstorm.svg";

type TechStackItemType = FC<SVGProps<SVGSVGElement>>

const iconsList: TechStackItemType[] = [
    HtmlIcon,
    CssIcon,
    SassIcon,
    JSIcon,
    TSIcon,
    ReactIcon,
    ReduxIcon,
    GitIcon,
    GitHubIcon,
    WebstormIcon
]

interface TechStackProps {
    className?: string;
    techStackList?: TechStackItemType[];
}

export const TechStack = (props: TechStackProps) => {
    const {className, techStackList} = props;

    const icons = techStackList || iconsList

    return (
        <div className={classNames(cls["tech-stack"], {}, [className])}>
            <SectionHeader
                title="Tech Stack"
                subtitle={"Technologies I’ve been working with recently"}
            />
            <div className={cls["tech-stack-icons-container"]}>
                {icons?.map((icon, index) => (
                    <Icon
                        Svg={icon}
                        className={cls['tech-stack-icons-container-icon']}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};