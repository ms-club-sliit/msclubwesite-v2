import { type } from "os";

interface IWebinarItem {
    id : number;
    imageUrl: string;
    time: string;
    dateTime: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
};

interface IWebinarFeed {
    id: number;
    imageUrl: string;
    time: string;
    dateTime: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
};

interface IWebinar {
    status: string;
    feed: IWebinarFeed;
    Items: IWebinarItem[];
};

export type {
    IWebinarItem,
    IWebinarFeed,
    IWebinar,
};