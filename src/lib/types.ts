import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];


export type CardType = {
    url: string;
    title: string;
    id: number;
};

export type MinimalCardType = {
    id: number;
    title: string;
    description: string;
};

export type TeamType = {
    link: string;
    url: string;
    title: string;
    alt: string;
};

export type whyChooseOurServices = {
    number: number;
    title: string;
    description: string;
}
