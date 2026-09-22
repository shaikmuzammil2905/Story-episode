import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockGenres, mockStories } from '@/data/mockData';
import StoryCard from '@/components/StoryCard';
import Button from '@/components/Button';

export default async function GenreDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = await params;
  const genre = mockGenres.find(g => g.id === resolvedParams.id || g.name.toLowerCase() === resolvedParams.id.toLowerCase());
  
  if (!genre) {
    // If not found in mock data, show a graceful fallback instead of 404
    return (
      <div className="container section-padding" style={{ textAlign: 'center' }}>
        <h1 className="heading-xl">Genre Not Found</h1>
        <p className="text-lg text-muted" style={{ margin: '2rem 0' }}>We couldn't find the genre you were looking for.</p>
        <Link href="/genres"><Button variant="primary">Browse All Genres</Button></Link>
      </div>
    );
  }

  const genreStories = mockStories.filter(s => s.genre.toLowerCase() === genre.name.toLowerCase());

  return (
    <div className="container section-padding">
      <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>{genre.name} Stories</h1>
      <p className="text-lg text-muted" style={{ marginBottom: '3rem' }}>{genre.description}</p>
      
      {genreStories.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {genreStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div style={{ padding: '4rem 0', textAlign: 'center', background: 'var(--white)', borderRadius: '16px' }}>
          <p className="text-lg text-muted">No stories found in this genre yet. Check back soon!</p>
        </div>
      )}
      
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link href="/genres"><Button variant="secondary">Back to Genres</Button></Link>
      </div>
    </div>
  );
}
