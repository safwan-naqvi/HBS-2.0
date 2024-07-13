import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];


export type CardType = {
    url: string;
    title: string;
    id: number;
};

export type TeamType = {
    link: string;
    url: string;
    title: string;
    alt: string;
};
