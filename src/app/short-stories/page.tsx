import React from 'react';
import Link from 'next/link';
import { mockStories } from '@/data/mockData';
import StoryCard from '@/components/StoryCard';
import Button from '@/components/Button';

export const metadata = {
  title: 'Short Stories - StoryEpisodes',
  description: 'Explore our collection of published short stories.',
};

export default function ShortStoriesPage() {
  const shortStories = mockStories.filter(s => s.categoryId === 'c2' && s.published === true);

  return (
    <div className="container section-padding">
      <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>Short Stories</h1>
      <p className="text-lg text-muted" style={{ marginBottom: '3rem' }}>
        Quick reads for your commute or coffee break.
      </p>
      
      {shortStories.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {shortStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div style={{ padding: '4rem 0', textAlign: 'center', background: 'var(--white)', borderRadius: '16px' }}>
          <p className="text-lg text-muted">No stories available in this category yet.</p>
        </div>
      )}
      
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link href="/stories"><Button variant="secondary">Browse All Stories</Button></Link>
      </div>
    </div>
  );
}
