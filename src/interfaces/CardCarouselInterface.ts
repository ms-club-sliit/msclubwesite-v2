
import { ICard } from './CardInterface';
import {IBlogItem} from './BlogInterface'

interface ICardCarousel {
    carouselTitle: string;
    items?: ICard[];
    blogItems?: IBlogItem[];
}

export type { ICardCarousel };
