import {Project} from "entities/Projects/ui/ProjectItem/ProjectItem";
import LinkChainIcon from "shared/assets/icons/LinkChain.svg";
import GitHubIcon from "shared/assets/icons/GitHub.svg";

export const ProjectsData: Project[] = [
    {
        id: "1",
        img: "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all",
        title: "Weather application",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStackList: ["HTML", "JavaScript", "SASS", "React"],
        previewLinks: [
            {
                icon: LinkChainIcon,
                link: 'https://github.com/FishManHell',
                text: 'Live Preview'
            },
            {
                icon: GitHubIcon,
                link: 'https://github.com/FishManHell',
                text: 'View Code'
            }
        ]
    },
    {
        id: "2",
        img: "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all",
        title: "Weather application",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStackList: ["HTML", "JavaScript", "SASS", "React"],
        previewLinks: [
            {
                icon: LinkChainIcon,
                link: 'https://github.com/FishManHell',
                text: 'Live Preview'
            },
            {
                icon: GitHubIcon,
                link: 'https://github.com/FishManHell',
                text: 'View Code'
            }
        ]
    },
]