export interface Episode {
  id: string;
  title: string;
  episodeNumber: number;
  content: string;
  isPremium: boolean;
  publishedDate: string;
}

export interface Story {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  genre: string;
  categoryId: string;
  shortDescription: string;
  longDescription: string;
  coverImage: string;
  status: "Ongoing" | "Completed";
  isPremium: boolean;
  publishedDate: string;
  episodes: Episode[];
  isFeatured?: boolean;
  isTrending?: boolean;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  profileImage: string;
}

export interface Genre {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
}
