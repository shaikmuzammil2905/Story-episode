import React from 'react';
import Link from 'next/link';
import { BookOpen, Home } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="container section-padding" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <BookOpen size={64} style={{ color: 'var(--story-blue)', marginBottom: '1.5rem', opacity: 0.8 }} />
      <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p className="text-lg text-muted" style={{ maxWidth: '500px', marginBottom: '2.5rem' }}>
        Looks like this story took an unexpected turn. The page or episode you are looking for does not exist or has been moved.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/">
          <Button variant="primary">
            <Home size={18} /> Back to Home
          </Button>
        </Link>
        <Link href="/stories">
          <Button variant="secondary">
            Explore Stories
          </Button>
        </Link>
      </div>
    </div>
  );
}
