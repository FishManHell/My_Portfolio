import {metaIconCollection} from "../../mocks/meta";

export type MetaIconKey = keyof typeof metaIconCollection;

export enum TimelineMetaLabel {
    'COMPANY' = 'company',
    'LOCATION' = 'location',
    'DATE' = 'date',
}

export interface TimelineCardMeta {
    icon: MetaIconKey
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