import cls from "./TimelineCard.module.scss"
import classNames from "classnames";
import {memo} from "react";
import {TimeLineCard} from "../module/types/timeLineCardTypes";
import {MetaCard} from "./MetaCard";


interface TimelineCardProps {
    className?: string;
    timelineCard?: TimeLineCard;
}

export const TimelineCard = memo((props: TimelineCardProps) => {
    const {className, timelineCard} = props;

    return (
        <article className={classNames(cls["timeline-card"], className)}>
            <header className={cls["timeline-card-header"]} >
                <h2 className={cls["timeline-card-header-title"]}>{timelineCard?.title}</h2>

                <div className={cls["timeline-card-header-type"]}>
                    <span className={cls["timeline-card-header-type-badge"]}>{timelineCard?.type}</span>
                </div>
            </header>

            <section className={cls["timeline-card-meta"]}>
                {timelineCard?.meta.map(meta => <MetaCard {...meta} key={meta.text}/>)}
            </section>
        </article>
    );
});