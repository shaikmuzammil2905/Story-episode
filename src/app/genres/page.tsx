import React from 'react';
import styles from './page.module.css';
import { mockGenres } from '../../data/mockData';
import GenreCard from '../../components/GenreCard';

export default function GenresPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h1 className="heading-xl">Explore Genres</h1>
          <p className="text-muted">Dive into our diverse worlds of storytelling.</p>
        </div>

        <div className={styles.genreGrid}>
          {mockGenres.map(genre => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </div>
      </div>
    </div>
  );
}
