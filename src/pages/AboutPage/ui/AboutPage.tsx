import cls from "./AboutPage.module.scss"
import classNames from "classnames"
import {SectionHeader} from "shared/ui/SectionHeader";
import {TimelineCard, educationList, experienceList} from "shared/ui/TimelineCard";

interface AboutPageProps {
    className?: string;
}

const AboutPage = (props: AboutPageProps) => {
    const {className} = props;

    return (
        <div className={classNames(cls["about-page"], {}, [className])}>
            <SectionHeader
                title={'About Me'}
                subtitle={"The Generator App is an online tool that helps you to export ready-made templates ready to " +
                    "work as your future website. It helps you to combine slides, panels and other components and export " +
                    "it as a set of static files: HTML/CSS/JS."
                }
                className={cls["about-page-header"]}
            />

            <section className={cls["about-page-experience"]}>
            <header className={cls["about-page-experience-header"]}><h2>Work Experience</h2></header>
                {experienceList.map(item => (
                    <TimelineCard timelineCard={item} key={item.id}/>
                ))}
            </section>
            <section className={cls["about-page-education"]}>
                <header className={cls["about-page-education-header"]}><h2>Education</h2></header>
                {educationList.map(item => (
                    <TimelineCard timelineCard={item} key={item.id}/>
                ))}
            </section>
        </div>
    );
};

export default AboutPage;