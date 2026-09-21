import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { mockAuthors } from '../../data/mockData';
import Button from '../../components/Button';

export default function AuthorsPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h1 className="heading-xl">Our Authors</h1>
          <p className="text-muted">Meet the brilliant minds behind your favorite stories.</p>
        </div>

        <div className={styles.authorGrid}>
          {mockAuthors.map(author => (
            <div key={author.id} className={styles.authorCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={author.profileImage} 
                  alt={author.name} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className={styles.name}>{author.name}</h3>
              <p className={styles.bio}>{author.bio}</p>
              <Button href={`/authors/${author.id}`} variant="outline" className={styles.btn}>View Profile</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
