import {FC, SVGProps} from "react";

interface PreviewLink {
    icon: FC<SVGProps<SVGSVGElement>>
    link: string;
    text: string;
}

export interface Project {
    id: string;
    img: string;
    title: string;
    description: string;
    techStackList: string[];
    previewLinks: PreviewLink[];
}