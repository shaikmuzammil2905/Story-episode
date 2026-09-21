import React from 'react';
import Link from 'next/link';
import { Bookmark, Clock, CheckCircle } from 'lucide-react';
import Button from '../../components/Button';
import { mockStories } from '../../data/mockData';
import StoryCard from '../../components/StoryCard';
import styles from '../stories/page.module.css';

export default function LibraryPage() {
  const savedStories = mockStories.slice(0, 2);

  return (
    <div className="container section-padding" style={{ minHeight: '80vh' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 className="heading-xl">My Library</h1>
        <p className="text-lg text-muted" style={{ marginTop: '0.5rem' }}>Your saved stories and reading history.</p>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', borderBottom: '1px solid var(--subtle-gray)', paddingBottom: '1rem' }}>
        <button style={{ padding: '0.5rem 1rem', fontWeight: 600, color: 'var(--story-blue)', borderBottom: '2px solid var(--story-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Bookmark size={18} /> Saved
        </button>
        <button style={{ padding: '0.5rem 1rem', fontWeight: 500, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock size={18} /> History
        </button>
        <button style={{ padding: '0.5rem 1rem', fontWeight: 500, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle size={18} /> Completed
        </button>
      </div>

      {savedStories.length > 0 ? (
        <div className={styles.storyGrid}>
          {savedStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '5rem 1rem', background: 'var(--white)', borderRadius: '16px' }}>
          <Bookmark size={48} style={{ color: 'var(--subtle-gray)', margin: '0 auto 1rem' }} />
          <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Your library is empty</h3>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>Start exploring stories and save them here to read later.</p>
          <Link href="/stories">
            <Button variant="primary">Explore Stories</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
