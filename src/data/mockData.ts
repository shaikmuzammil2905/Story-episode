import { Story, Author, Genre, Category } from "../types";

export const mockCategories: Category[] = [
  { id: "c1", name: "Novels" },
  { id: "c2", name: "Short Stories" },
  { id: "c3", name: "Comics" },
];

export const mockGenres: Genre[] = [
  {
    id: "g1",
    name: "Fantasy",
    description: "Enter worlds filled with magic, mystery and adventure.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
  },
  {
    id: "g2",
    name: "Romance",
    description: "Stories of love, relationships and emotions.",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&q=80",
  },
  {
    id: "g3",
    name: "Mystery",
    description: "Follow clues, secrets and unexpected twists.",
    image: "https://images.unsplash.com/photo-1478059299873-f044d8c2f71e?w=800&q=80",
  },
  {
    id: "g4",
    name: "Sci-Fi",
    description: "Explore the future, technology, and space.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: "g5",
    name: "Thriller",
    description: "Edge-of-your-seat suspense and action.",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&q=80",
  },
  {
    id: "g6",
    name: "Horror",
    description: "Terrifying tales that will keep you awake.",
    image: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=800&q=80",
  },
];

export const mockAuthors: Author[] = [
  {
    id: "a1",
    name: "Jane Doe",
    bio: "Jane has been writing fantasy novels for over a decade. Her passion for world-building is evident in her intricate stories.",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: "a2",
    name: "John Smith",
    bio: "John specializes in thrilling mysteries that leave the reader guessing until the very end.",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

export const mockStories: Story[] = [
  {
    id: "s1",
    title: "The Dragon's Awakening",
    authorId: "a1",
    authorName: "Jane Doe",
    genre: "Fantasy",
    categoryId: "c1",
    shortDescription: "A young mage discovers a dormant dragon, sparking a war that will change the realm forever.",
    longDescription: "In the land of Eldoria, magic has been forbidden for centuries. Elara, a young girl with a secret gift, stumbles upon a dormant dragon deep within the forbidden mountains. Her discovery sets off a chain of events that will awaken ancient powers and ignite a war that threatens to consume the entire realm.",
    coverImage: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=600&q=80",
    status: "Ongoing",
    isPremium: false,
    publishedDate: "2024-01-15",
    isFeatured: true,
    isTrending: true,
    episodes: [
      {
        id: "e1",
        title: "The Forbidden Mountain",
        episodeNumber: 1,
        content: "<p>Elara stared at the towering peaks of the Forbidden Mountain, her heart pounding with a mixture of fear and excitement.</p><p>For centuries, the villagers had told stories of the horrors that lurked within, but Elara felt a strange pull, a whisper in the wind that she could no longer ignore.</p><p>Taking a deep breath, she began the treacherous climb.</p>",
        isPremium: false,
        publishedDate: "2024-01-15",
      },
      {
        id: "e2",
        title: "The Sleeping Beast",
        episodeNumber: 2,
        content: "<p>The cavern was vast and dark. In the center lay a creature of immense size, its scales shimmering like obsidian.</p><p>Elara slowly approached, realizing the legends were true. It was a dragon, and it was asleep.</p>",
        isPremium: false,
        publishedDate: "2024-01-22",
      },
    ],
  },
  {
    id: "s2",
    title: "Whispers in the Dark",
    authorId: "a2",
    authorName: "John Smith",
    genre: "Mystery",
    categoryId: "c1",
    shortDescription: "A detective must solve a series of murders that mimic a century-old cold case.",
    longDescription: "Detective Reynolds thought he had seen it all, until a string of gruesome murders rocks the city. The unsettling part? Each crime scene perfectly mimics the infamous 'Midnight Strangler' killings from over a hundred years ago. Reynolds must race against time to stop the copycat before they complete their macabre masterpiece.",
    coverImage: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=600&q=80",
    status: "Completed",
    isPremium: true,
    publishedDate: "2023-11-05",
    isFeatured: true,
    isTrending: false,
    episodes: [
      {
        id: "e1",
        title: "The First Victim",
        episodeNumber: 1,
        content: "<p>The rain washed over the cobblestone streets as Reynolds examined the scene. The similarities were uncanny.</p>",
        isPremium: false,
        publishedDate: "2023-11-05",
      },
      {
        id: "e2",
        title: "A Pattern Emerges",
        episodeNumber: 2,
        content: "<p>Reynolds spent hours pouring over the old files. The killer wasn't just copying; they were perfecting.</p>",
        isPremium: true,
        publishedDate: "2023-11-12",
      },
    ],
  },
  {
    id: "s3",
    title: "Love in Paris",
    authorId: "a1",
    authorName: "Jane Doe",
    genre: "Romance",
    categoryId: "c2",
    shortDescription: "A chance encounter in Paris leads to an unforgettable romance.",
    longDescription: "When Emily traveled to Paris for a summer internship, she never expected to bump into Leo, a charming local artist. Their brief encounter quickly blossoms into a whirlwind romance, but with Emily's departure looming, they must decide if their love is worth fighting for across oceans.",
    coverImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80",
    status: "Completed",
    isPremium: false,
    publishedDate: "2023-08-20",
    isFeatured: false,
    isTrending: true,
    episodes: [
      {
        id: "e1",
        title: "The Coffee Shop",
        episodeNumber: 1,
        content: "<p>Emily tripped, spilling her latte everywhere. 'I'm so sorry!' she gasped, looking up into striking blue eyes.</p>",
        isPremium: false,
        publishedDate: "2023-08-20",
      },
    ],
  }
];
