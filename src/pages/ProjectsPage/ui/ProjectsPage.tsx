import cls from "./ProjectsPage.module.scss"
import classNames from "classnames";
import {Project, ProjectsList} from "entities/Projects";
import {useFetch} from "shared/libs/hooks";
import {useMemo} from "react";

interface ProjectsPageProps {
    className?: string;
    mockProjects?: Project[];
}

const ProjectsPage = (props: ProjectsPageProps) => {
    const {className, mockProjects} = props;
    const {data: projects, loading, error} = useFetch<Project[]>({method: "get", endpoint: "/projects"});

    const result = mockProjects ?? projects

    const sortedProjects = useMemo(() => {
        if (!result) return []
        return [...result].sort((a, b) => {
            return new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime();
        });
    }, [result])

    return (
        <div className={classNames(cls["projects-page"], className)}>
            <ProjectsList
                projects={sortedProjects}
                projectsLoading={loading}
                className={cls["projects-page-list"]}
            />
        </div>
    );
};

export default ProjectsPage;