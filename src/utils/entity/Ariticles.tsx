export interface Article {
  id?: string;
  title: string;
  year: string;
  author?:string|null;
  citations: number;
  openAccess: boolean;
  summary: string;
  url: string|null;
  // Article 1:
  // Title:
  // Year: 2020
  // Citations: 100
  // Open Access: Yes
  // Summary:
}

//the article response from openAlex
export interface ArticleOpenAlex {
  id: string;
  display_name: string;
  created_date: string;
  cited_by_count: number;
  open_access: {
    is_oa: boolean;
    oa_url: string;
  };
  title: string;

  //the keywords array, need this to send to chatgpt to get the summary
  keywords: Keyword[];

  //Authors list
  authorships: Authorship[];

  //abstract array, use them to build the summary
  abstract_inverted_index: {
    [index: string]: string[];
  };
}

export interface Keyword {
  id: string;
  display_name: string;
  score: number;
}

export interface Authorship {
  author:Author
}

export interface Author {
  display_name:string;
}
