import cls from "./SectionHeader.module.scss"
import classNames from "classnames";

interface SectionHeaderProps {
    className?: string;
    title?: string;
    subtitle?: string;
}

export const SectionHeader = (props: SectionHeaderProps) => {
    const {className, subtitle, title} = props;

    return (
        <div className={classNames(cls["section-header"], className)} data-testid="section-header">
            {title && <h1 className={cls["section-header-title"]}>{title}</h1>}
            {subtitle && <h2 className={cls["section-header-subtitle"]}>{subtitle}</h2>}
        </div>
    );
};