import React from 'react';
import Link from 'next/link';
import { mockAuthors, mockStories } from '@/data/mockData';
import StoryCard from '@/components/StoryCard';
import Button from '@/components/Button';

export default function AuthorDetailPage({ params }: { params: { id: string } }) {
  const author = mockAuthors.find(a => a.id === params.id || a.name.toLowerCase().replace(/\s+/g, '-') === params.id);
  
  if (!author) {
    // Graceful fallback for missing authors instead of 404
    return (
      <div className="container section-padding" style={{ textAlign: 'center' }}>
        <h1 className="heading-xl">Author Not Found</h1>
        <p className="text-lg text-muted" style={{ margin: '2rem 0' }}>We couldn't find this author.</p>
        <Link href="/authors"><Button variant="primary">Browse All Authors</Button></Link>
      </div>
    );
  }

  const authorStories = mockStories.filter(s => s.authorId === author.id);

  return (
    <div className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>{author.name}</h1>
        <p className="text-lg text-muted">{author.bio}</p>
      </div>
      
      <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Stories by {author.name}</h2>
      {authorStories.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {authorStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div style={{ padding: '4rem 0', textAlign: 'center', background: 'var(--white)', borderRadius: '16px' }}>
          <p className="text-lg text-muted">No stories published yet.</p>
        </div>
      )}
      
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link href="/authors"><Button variant="secondary">Back to Authors</Button></Link>
      </div>
    </div>
  );
}
