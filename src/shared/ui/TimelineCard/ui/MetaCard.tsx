import {TimelineCardMeta, TimelineMetaLabel} from "../module/types/timeLineCardTypes";
import cls from "../ui/TimelineCard.module.scss";
import {Icon} from "shared/ui/Icon";
import {memo} from "react";

export const MetaCard = memo((props: TimelineCardMeta) => {
    const {icon, text, label, date} = props;

    const isDate = label === TimelineMetaLabel.DATE && !!date

    const DateContent = (
        <p className={cls["timeline-card-meta-duration"]}>
            <Icon Svg={icon}/>
            <time dateTime={date?.from} className={cls["timeline-card-meta-duration-from"]}>
                {date?.from}
            </time>
            &nbsp;–&nbsp;
            <time dateTime={date?.to} className={cls["timeline-card-meta-duration-to"]}>
                {date?.to}
            </time>
        </p>
    )

    if (isDate) return DateContent;

    return (
        <p className={cls[`timeline-card-meta-${label}`]}>
            <Icon Svg={icon}/>
            {text}
        </p>
    );
});