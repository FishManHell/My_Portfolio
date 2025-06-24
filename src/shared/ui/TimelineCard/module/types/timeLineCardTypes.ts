import {FC, SVGProps} from "react";

export enum TimelineMetaLabel {
    'COMPANY' = 'company',
    'LOCATION' = 'location',
    'DATE' = 'date',
}

export interface TimelineCardMeta {
    icon: FC<SVGProps<SVGSVGElement>>
    text: string
    label: TimelineMetaLabel
    date?: {
        from: string;
        to: string;
    }
}

export interface TimeLineCard {
    id: string;
    title: string;
    type: string;
    meta: TimelineCardMeta[]
}