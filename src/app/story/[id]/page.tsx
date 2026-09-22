'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Bookmark, Share2, PlayCircle, BookOpen, Clock } from 'lucide-react';
import styles from './page.module.css';
import { mockStories } from '../../../data/mockData';
import Button from '../../../components/Button';
import ShareModal from '../../../components/ShareModal';
import StoryCard from '../../../components/StoryCard';

// Next.js App Router dynamic params
export default function StoryDetailsPage({ params }: { params: { id: string } }) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const story = mockStories.find(s => s.id === params.id);
  
  if (!story) {
    notFound();
  }

  const firstEpisodeId = story.episodes.length > 0 ? story.episodes[0].id : null;

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image 
            src={story.coverImage} 
            alt="Background blur" 
            fill 
            className={styles.blurImg}
          />
          <div className={styles.overlay}></div>
        </div>
        
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.coverWrapper}>
            <Image 
              src={story.coverImage} 
              alt={story.title} 
              fill 
              className={styles.coverImg}
              priority
            />
          </div>
          
          <div className={styles.info}>
            <div className={styles.badges}>
              <span className={styles.badge}>{story.genre}</span>
              {story.isPremium && <span className={styles.premiumBadge}>Premium</span>}
            </div>
            
            <h1 className="heading-lg" style={{color: 'var(--white)'}}>{story.title}</h1>
            <p className={styles.author}>by <Link href={`/authors/${story.authorId}`}>{story.authorName}</Link></p>
            
            <div className={styles.meta}>
              <span><BookOpen size={16} /> {story.episodes.length} Episodes</span>
              <span><Clock size={16} /> {story.status}</span>
              <span>Updated: {new Date(story.publishedDate).toLocaleDateString()}</span>
            </div>
            
            <p className={styles.description}>{story.longDescription}</p>
            
            <div className={styles.actions}>
              {firstEpisodeId ? (
                <Button href={`/reader/${story.id}/${firstEpisodeId}`} variant="primary">
                  <PlayCircle size={20} /> Start Reading
                </Button>
              ) : (
                <Button variant="outline" className={styles.disabledBtn}>No Episodes Yet</Button>
              )}
              <Button variant="secondary"><Bookmark size={20} /> Follow</Button>
              <button className={styles.iconBtn} aria-label="Share" onClick={() => setIsShareOpen(true)}>
                <Share2 size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ShareModal 
        isOpen={isShareOpen} 
        onClose={() => setIsShareOpen(false)} 
        url={pageUrl}
        title={story.title}
      />

      {/* Episode List */}
      <section className="section-padding">
        <div className="container" style={{maxWidth: '800px'}}>
          <h2 className="heading-md" style={{marginBottom: '2rem'}}>Episodes</h2>
          
          <div className={styles.episodeList}>
            {story.episodes.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No episodes have been published yet.</p>
              </div>
            ) : (
              story.episodes.map(episode => (
                <Link 
                  href={`/reader/${story.id}/${episode.id}`} 
                  key={episode.id} 
                  className={styles.episodeCard}
                >
                  <div className={styles.episodeNumber}>
                    {String(episode.episodeNumber).padStart(2, '0')}
                  </div>
                  <div className={styles.episodeInfo}>
                    <h3>{episode.title}</h3>
                    <p>{new Date(episode.publishedDate).toLocaleDateString()}</p>
                  </div>
                  <div className={styles.episodeStatus}>
                    {episode.isPremium ? (
                      <span className={styles.lockBadge}>Premium</span>
                    ) : (
                      <span className={styles.freeBadge}>Free</span>
                    )}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      {/* Related Stories Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--soft-cream)' }}>
        <div className="container">
          <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Related Stories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {mockStories
              .filter(s => s.genre === story.genre && s.id !== story.id)
              .slice(0, 3)
              .map(relatedStory => (
                <StoryCard key={relatedStory.id} story={relatedStory} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
