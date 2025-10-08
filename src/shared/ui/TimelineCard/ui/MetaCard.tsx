import {TimelineCardMeta, TimelineMetaLabel} from "../module/types/timeLineCardTypes";
import cls from "../ui/TimelineCard.module.scss";
import {Icon} from "shared/ui/Icon";
import {memo} from "react";
import {metaIconCollection} from "shared/ui/TimelineCard";

export const MetaCard = memo((props: TimelineCardMeta) => {
    const {icon, text, label, date} = props;

    const isDate = label === TimelineMetaLabel.DATE && !!date;

    const metaIcon = metaIconCollection[icon];

    const DateContent = (
        <div className={cls["timeline-card-meta-duration"]} data-testid="meta-card">
            {metaIcon && <Icon Svg={metaIcon}/>}
            <time dateTime={date?.from} className={cls["timeline-card-meta-duration-from"]}>
                {date?.from}
            </time>
            &nbsp;–&nbsp;
            <time dateTime={date?.to} className={cls["timeline-card-meta-duration-to"]}>
                {date?.to}
            </time>
        </div>
    )

    if (isDate) return DateContent;

    return (
        <div className={cls[`timeline-card-meta-${label}`]} data-testid="meta-card">
            {metaIcon && <Icon Svg={metaIcon}/>}
            {text}
        </div>
    );
});