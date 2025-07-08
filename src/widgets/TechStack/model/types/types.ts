import {techStacksIconCollection} from "../mock/tech_stacks";

export type TechStacksIconKey = keyof typeof techStacksIconCollection;

export interface TechStackItem {
    id: string;
    icon_key: TechStacksIconKey
}
