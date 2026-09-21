import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Story } from '../types';
import styles from './StoryCard.module.css';

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/story/${story.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={story.coverImage} 
          alt={story.title} 
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {story.isPremium && <span className={styles.premiumBadge}>Premium</span>}
        <span className={styles.genreBadge}>{story.genre}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{story.title}</h3>
        <p className={styles.author}>by {story.authorName}</p>
        <p className={styles.description}>{story.shortDescription}</p>
        <div className={styles.meta}>
          <span className={styles.episodes}>{story.episodes.length} Episodes</span>
          <span className={styles.status}>{story.status}</span>
        </div>
      </div>
    </Link>
  );
}
