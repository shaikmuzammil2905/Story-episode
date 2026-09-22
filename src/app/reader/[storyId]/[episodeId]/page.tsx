'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Home, Settings, Share2, Bookmark } from 'lucide-react';
import styles from './page.module.css';
import { mockStories } from '../../../../data/mockData';
import Button from '../../../../components/Button';
import ShareModal from '../../../../components/ShareModal';
import StoryCard from '../../../../components/StoryCard';

export default function ReaderPage() {
  const params = useParams();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const story = mockStories.find(s => s.id === params.storyId);
  
  if (!story) {
    notFound();
  }

  const episodeIndex = story.episodes.findIndex(e => e.id === params.episodeId);
  const episode = story.episodes[episodeIndex];

  if (!episode) {
    notFound();
  }

  const prevEpisode = episodeIndex > 0 ? story.episodes[episodeIndex - 1] : null;
  const nextEpisode = episodeIndex < story.episodes.length - 1 ? story.episodes[episodeIndex + 1] : null;

  return (
    <div className={styles.readerWrapper}>
      {/* Reader Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Link href={`/story/${story.id}`} className={styles.backBtn}>
            <ArrowLeft size={20} />
            <span className="desktop-only">{story.title}</span>
          </Link>
          
          <div className={styles.episodeTitle}>
            Episode {episode.episodeNumber}: {episode.title}
          </div>
          
          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Settings"><Settings size={20} /></button>
            <button className={styles.iconBtn} aria-label="Share" onClick={() => setIsShareOpen(true)}><Share2 size={20} /></button>
            <button className={styles.iconBtn} aria-label="Bookmark"><Bookmark size={20} /></button>
          </div>
        </div>
      </header>

      <ShareModal 
        isOpen={isShareOpen} 
        onClose={() => setIsShareOpen(false)} 
        url={pageUrl}
        title={`${story.title} - ${episode.title}`}
      />

      {/* Reader Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.contentHeader}>
            <h1 className={styles.title}>{episode.title}</h1>
            <p className={styles.author}>By {story.authorName}</p>
          </div>
          
          <div 
            className={styles.textContent}
            dangerouslySetInnerHTML={{ __html: episode.content }} 
          />
        </div>
      </main>

      {/* Recommended Story Section */}
      {!nextEpisode && (
        <section style={{ padding: '2rem 1rem', backgroundColor: 'var(--soft-cream)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h3 className="heading-sm" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>You've reached the end! Try these next:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {mockStories
                .filter(s => s.genre === story.genre && s.id !== story.id)
                .slice(0, 2)
                .map(relatedStory => (
                  <StoryCard key={relatedStory.id} story={relatedStory} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Reader Footer Navigation */}
      <footer className={styles.footerNav}>
        <div className={`container ${styles.footerContainer}`}>
          {prevEpisode ? (
            <Button href={`/reader/${story.id}/${prevEpisode.id}`} variant="outline">
              <ArrowLeft size={16} /> Previous
            </Button>
          ) : (
            <div /> // Empty div for spacing
          )}
          
          <Link href={`/story/${story.id}`} className={styles.homeBtn}>
            <Home size={20} />
          </Link>
          
          {nextEpisode ? (
            <Button href={`/reader/${story.id}/${nextEpisode.id}`} variant="primary">
              Next <ArrowRight size={16} />
            </Button>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </div>
  );
}
