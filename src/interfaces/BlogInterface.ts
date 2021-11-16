interface IBlogItem {
  title?: string;
  pubDate?:string;
  link?:string;
  author?:string;
  thumbnail?:string;
  description?:string;
  categories?:string[];
};

interface IBlogFeed {
  description?:string;
  image?:string;
  link?:string;
  title?:string;
  url?:string;
};

interface IBlog {
  status?:string;
  feed?:IBlogFeed;
  items?:IBlogItem[];
}

export type {
  IBlogItem,
  IBlogFeed,
  IBlog,
};