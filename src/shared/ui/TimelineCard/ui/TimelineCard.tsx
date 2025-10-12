import cls from "./TimelineCard.module.scss"
import classNames from "classnames";
import {memo} from "react";
import {TimeLineCard} from "../module/types/timeLineCardTypes";
import {MetaCard} from "./MetaCard";
import {Skeleton} from "shared/ui/Skeleton";


interface TimelineCardProps {
    className?: string;
    timelineCard?: TimeLineCard;
    loading?: boolean;
}

export const TimelineCard = memo((props: TimelineCardProps) => {
    const {className, timelineCard, loading} = props;

    if (loading) {
        return (
            <article className={classNames(cls["timeline-card"], className)}>
                <header className={cls["timeline-card-header"]}>
                    <Skeleton width={200} height={20}/>
                    <Skeleton width={80} height={24} border={'100px'}/>
                </header>

                <section className={cls["timeline-card-meta"]}>
                    <Skeleton width={80} height={20}/>
                    <Skeleton width={80} height={20}/>
                    <Skeleton width={80} height={20}/>
                </section>
            </article>
        )
    }

    return (
        <article className={classNames(cls["timeline-card"], className)} data-testid={"timeline-card"}>
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