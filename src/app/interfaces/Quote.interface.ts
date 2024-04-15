export interface Quote {
  id: string;
  author?: string;
  content?: string;
  isFeatured?: boolean;
  title?: string;
  tags?: Array<string>;
}
