export interface INews {
  id: number;
  title: string;
  originalUrl: string;
  content: string[];
  imageUrl: string;
  resourceName: string;
}

export const getNews = async (limit: number, id?: number) => {
  const posts = (await fetch(
    `http://localhost:3001/posts/last-posts?limit=${limit}`,
    {
      next: { tags: ["news"] },
      cache: "no-store",
    }
  ).then((res) => res.json())) as INews[];
  return id ? posts.filter((post) => post.id === id) : posts;
};
