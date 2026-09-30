import React from 'react';
import Link from 'next/link';
import { mockStories } from '@/data/mockData';
import StoryCard from '@/components/StoryCard';
import Button from '@/components/Button';

export const metadata = {
  title: 'Comedy Stories - StoryEpisodes',
  description: 'Explore our collection of published comedy stories.',
};

export default function ComedyStoriesPage() {
  const comedyStories = mockStories.filter(s => s.storyType === 'Comedy Story' && s.published === true);

  return (
    <div className="container section-padding">
      <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>Comedy Stories</h1>
      <p className="text-lg text-muted" style={{ marginBottom: '3rem' }}>
        Laugh out loud with our collection of comedy stories.
      </p>
      
      {comedyStories.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {comedyStories.map(story => (
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
