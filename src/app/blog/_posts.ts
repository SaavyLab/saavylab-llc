export type PostMeta = {
  slug: string;
  title: string;
  summary?: string;
  date?: string;
};

export const posts: PostMeta[] = [
  {
    slug: "hello-world",
    title: "Hello, SaavyLab",
    summary: "Kicking off our dev + music tech notes.",
    date: "2025-09-08",
  },
];

