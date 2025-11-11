export type WPPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
  };
};

export const WORDPRESS_API_URL = "https://www.stepms.com/wp-json/wp/v2/posts";
export const POSTS_PER_PAGE = 4;

export const stripHTML = (html: string) => html.replace(/<[^>]+>/g, "").trim();

export const formatPostDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const getFeaturedImage = (post: WPPost) =>
  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
