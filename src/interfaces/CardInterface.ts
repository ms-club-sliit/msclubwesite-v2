interface ICard {
  id:number;
  type: string;
  title: string;
  author?: string,
  imageUrl?: string;
  tags?: string[];
  dateTime?: string;
  link?: string;
  description?: string;
  socialMediaURLs?: socialMediaURLs;
  icon?:string;
}

interface socialMediaURLs {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedIn: string;
  web: string;
};


export type { ICard };