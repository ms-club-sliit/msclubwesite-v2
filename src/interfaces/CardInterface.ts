interface ICard {
  id:number;
  title?: string;
  imageUrl?: string;
  tags?: string[];
  dateTime?: string;
  link?: string;
  description?: string;
}

export type { ICard };