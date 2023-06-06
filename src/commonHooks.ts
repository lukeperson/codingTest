import articles from "./news.json";

export interface Articles {
  articles: Article[];
  error: boolean;
  loading: boolean;
}

export interface Article {
  id: string;
  byline: {
    text: string;
  };
  head: string;
  teaser: string;
  image: string;
}
export const useArticles = (): Articles => {
  return { articles: articles.articles, loading: false, error: false };
};

export function getImageFileName(imageSrc: string): string {
  if (imageSrc.includes("/")) {
    return imageSrc.split("/")[1];
  }

  return imageSrc;
}
