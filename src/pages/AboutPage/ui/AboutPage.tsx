import cls from "./AboutPage.module.scss"
import classNames from "classnames"
import {SectionHeader} from "shared/ui/SectionHeader";
import {TimelineCard, TimeLineCard} from "shared/ui/TimelineCard";
import {useMultiFetch} from "shared/libs/hooks";

type AboutPageData = [TimeLineCard[], TimeLineCard[]]

interface AboutPageProps {
    className?: string;
    mockResults?: AboutPageData // only for storybook
}

const AboutPage = (props: AboutPageProps) => {
    const {className, mockResults} = props;
    const {results, loading, error} = useMultiFetch<AboutPageData>([
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


    const timeLineListRenderer = (index: number) => {
        if (loading) return (
            <>
                <TimelineCard loading/>
                <TimelineCard loading/>
                <TimelineCard loading/>
            </>
        )
        return finalResults?.[index].map(item => <TimelineCard timelineCard={item} key={item.id}/>) ?? null
    }


    return (
        <div className={classNames(cls["about-page"], className)}>
            <SectionHeader
                title={'About Me'}
                subtitle={subtitle}
                className={cls["about-page-header"]}
            />

            <section className={cls["about-page-experience"]}>
            <header className={cls["about-page-experience-header"]}>
                <h2>Work Experience</h2>
            </header>
                {timeLineListRenderer(0)}
            </section>
            <section className={cls["about-page-education"]}>
                <header className={cls["about-page-education-header"]}>
                    <h2>Education</h2>
                </header>
                {timeLineListRenderer(1)}
            </section>
        </div>
    );
};

export default AboutPage;