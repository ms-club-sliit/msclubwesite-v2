interface ICard {
  id:number;
  title?: string;
  imageUrl?: string;
  tags?: string[];
  dateTime?: string;
  link?: string;
  description?: string;
  socialMediaURLs?: socialMediaURLs;
}

interface socialMediaURLs {
  fb: string;
  instagram: string;
  twitter: string;
  linkedIn: string;
  web: string;
};


export type { ICard };