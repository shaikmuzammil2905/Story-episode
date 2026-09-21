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
    image: "/images/genres/fantasy.jpg",
  },
  {
    id: "g2",
    name: "Romance",
    description: "Stories of love, relationships and emotions.",
    image: "/images/genres/romance.jpg",
  },
  {
    id: "g3",
    name: "Mystery",
    description: "Follow clues, secrets and unexpected twists.",
    image: "/images/genres/mystery.jpg",
  },
  {
    id: "g4",
    name: "Sci-Fi",
    description: "Explore the future, technology, and space.",
    image: "/images/genres/scifi.jpg",
  },
  {
    id: "g5",
    name: "Thriller",
    description: "Edge-of-your-seat suspense and action.",
    image: "/images/genres/thriller.jpg",
  },
  {
    id: "g6",
    name: "Horror",
    description: "Terrifying tales that will keep you awake.",
    image: "/images/genres/horror.jpg",
  },
];

export const mockAuthors: Author[] = [
  {
    id: "a1",
    name: "Elena Vance",
    bio: "Award-winning author of mystery and contemporary romance. When not writing, Elena can be found drinking too much tea and exploring old bookshops.",
    profileImage: "/images/authors/elena.jpg",
  },
  {
    id: "a2",
    name: "Marcus Thorne",
    bio: "Creator of the bestselling 'Aether Chronicles'. Marcus writes epic fantasy that explores the intersection of magic and technology.",
    profileImage: "/images/authors/marcus.jpg",
  },
];

export const mockStories: Story[] = [
  {
    id: "s1",
    title: "The Dragon's Awakening",
    authorId: "a2",
    authorName: "Marcus Thorne",
    genre: "Fantasy",
    categoryId: "c1",
    shortDescription: "A young mage discovers a dormant dragon, sparking a war that will change the realm forever.",
    longDescription: "In the land of Eldoria, magic has been forbidden for centuries. Elara, a young girl with a secret gift, stumbles upon a dormant dragon deep within the forbidden mountains. Her discovery sets off a chain of events that will awaken ancient powers and ignite a war that threatens to consume the entire realm.",
    coverImage: "/images/stories/fantasy.jpg",
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
    authorId: "a1",
    authorName: "Elena Vance",
    genre: "Mystery",
    categoryId: "c1",
    shortDescription: "A detective must solve a series of murders that mimic a century-old cold case.",
    longDescription: "Detective Reynolds thought he had seen it all, until a string of gruesome murders rocks the city. The unsettling part? Each crime scene perfectly mimics the infamous 'Midnight Strangler' killings from over a hundred years ago. Reynolds must race against time to stop the copycat before they complete their macabre masterpiece.",
    coverImage: "/images/stories/mystery.jpg",
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
    authorName: "Elena Vance",
    genre: "Romance",
    categoryId: "c2",
    shortDescription: "A chance encounter in Paris leads to an unforgettable romance.",
    longDescription: "When Emily traveled to Paris for a summer internship, she never expected to bump into Leo, a charming local artist. Their brief encounter quickly blossoms into a whirlwind romance, but with Emily's departure looming, they must decide if their love is worth fighting for across oceans.",
    coverImage: "/images/stories/romance.jpg",
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
