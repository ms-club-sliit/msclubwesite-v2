interface IWebinar{
	title: string;
	description: string;
	imageUrl: string;
	dateTime: Date;
	tags?: string[];
	link?: string;
	registrationLink?: string;
	webinarType: string;
}

export type { IWebinar };