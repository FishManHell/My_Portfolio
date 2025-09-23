import {projectPreviewIconCollection} from "../../mocks/project_previews";

export type PreviewIconKey = keyof typeof projectPreviewIconCollection;

interface PreviewLink {
    icon: PreviewIconKey
    link: string;
    text: string;
}

export interface Project {
    id: string;
    img: string;
    title: string;
    description: string;
    tech_stack: string[];
    links: PreviewLink[];
    device_support: string[]
}