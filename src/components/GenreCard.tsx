import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Genre } from '../types';
import styles from './GenreCard.module.css';

interface GenreCardProps {
  genre: Genre;
}

export default function GenreCard({ genre }: GenreCardProps) {
  return (
    <Link href={`/genres/${genre.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={genre.image} 
          alt={genre.name} 
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.overlay}>
          <h3 className={styles.title}>{genre.name}</h3>
          <p className={styles.description}>{genre.description}</p>
        </div>
      </div>
    </Link>
  );
}
