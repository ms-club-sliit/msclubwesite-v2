interface IEvent {
    _id?: string;
    title: string;
    description: string;
    dateTime: Date;
    tags?: string[];
    link?: string;
    registrationLink: string;
    eventType: string;
    imageUrl: string;
}

export type { IEvent };