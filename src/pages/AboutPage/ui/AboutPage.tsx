import cls from "./AboutPage.module.scss"
import classNames from "classnames"
import {SectionHeader} from "shared/ui/SectionHeader";
import {TimelineCard} from "shared/ui/TimelineCard";
import {useMultiFetch} from "shared/libs/hooks/useMultiFetch";
import {TimeLineCard} from "shared/ui/TimelineCard/module/types/timeLineCardTypes";

interface AboutPageProps {
    className?: string;
    mockResults?: [TimeLineCard[], TimeLineCard[]] // just for storybook
}

const AboutPage = (props: AboutPageProps) => {
    const {className, mockResults} = props;
    const {results, loading, error} = useMultiFetch<[TimeLineCard[], TimeLineCard[]]>([
        {method: "get", url: "/works"},
        {method: "get", url: "/educations"}
    ])

    const finalResults = mockResults ?? results;

    const subtitle = `Experienced Front-End Developer with over 5+ years of
                       expertise in creating dynamic, user-friendly web applications
                       using JavaScript, TypeScript, React, and modern frameworks.
                       Adept at optimizing user interfaces, collaborating with crossfunctional teams, and delivering high-quality solutions.
                       Looking to contribute my skills and creativity to challenging
                       projects`

    return (
        <div className={classNames(cls["about-page"], {}, [className])}>
            <SectionHeader
                title={'About Me'}
                subtitle={subtitle}
                className={cls["about-page-header"]}
            />

            <section className={cls["about-page-experience"]}>
            <header className={cls["about-page-experience-header"]}>
                <h2>Work Experience</h2>
            </header>
                {finalResults?.[0].map(item => <TimelineCard timelineCard={item} key={item.id}/>)}
            </section>
            <section className={cls["about-page-education"]}>
                <header className={cls["about-page-education-header"]}>
                    <h2>Education</h2>
                </header>
                {finalResults?.[1].map(item => <TimelineCard timelineCard={item} key={item.id}/>)}
            </section>
        </div>
    );
};

export default AboutPage;