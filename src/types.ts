export interface INewsAPI {
  sources: ISources[];
  categories: ICategories[];
  items: IArticle[];
}

export interface ISources {
  id: number;
  name: string;
}

export interface ICategories {
  id: number;
  name: string;
}

export interface IArticle {
  id: number;
  lang: string;
  date: string;
  title: string;
  description: string;
  image: string;
  source_id: number;
  category_id: number;
}

export interface IArticleItemAPI {
  id: number;
  lang: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
  author: string;
  text: string;
  category: ICategories;
  source: Source;
}

export interface Category {
  id: number;
  name: string;
}

export interface Source {
  id: number;
  name: string;
  site?: string;
}

export interface IArticle {
  id: number;
  lang: string;
  date: string;
  title: string;
  description: string;
  image: string;
  source_id: number;
  category_id: number;
}
