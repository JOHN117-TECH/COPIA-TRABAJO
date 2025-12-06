export interface NewsArticlePreview {
  id: string;
  title: string;
  slug: string;
  summary: string;
  listingImageThumbSmall: string;
  tags: string[];
}

export interface NewsArticlePreviewResponse {
  posts: NewsArticlePreview[];
}
