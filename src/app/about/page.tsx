import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Map, Sparkles, RefreshCcw } from 'lucide-react';
import Button from '../../components/Button';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="heading-xl">Read. Explore. Keep Coming Back.</h1>
            <p className="text-xl">
              StoryEpisodes is a story-focused reading platform created for readers who enjoy discovering stories one episode at a time.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding container">
        <div className={styles.twoColumn}>
          <div className={styles.imageContent}>
            <div className={styles.aboutImageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80" 
                alt="Storytelling and reading" 
                fill 
                className={styles.aboutImage}
              />
            </div>
          </div>
          <div className={styles.textContent}>
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>About StoryEpisodes</h2>
            <p className="text-lg text-muted" style={{ marginBottom: '1.5rem' }}>
              StoryEpisodes is a story-focused reading platform created for readers who enjoy discovering stories one episode at a time.
            </p>
            <p className="text-lg text-muted" style={{ marginBottom: '1.5rem' }}>
              Our idea is simple:
            </p>
            <ul className={styles.ideaList}>
              <li>Read.</li>
              <li>Explore.</li>
              <li>Keep Coming Back.</li>
            </ul>
            <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
              StoryEpisodes makes it easy for readers to discover engaging stories, explore different genres, follow ongoing series and continue reading episode by episode.
            </p>
            
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Why StoryEpisodes?</h2>
            <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
              Stories become more exciting when there is always another episode waiting. StoryEpisodes is designed around episodic storytelling, helping readers discover new worlds, characters and adventures while giving them a reason to return for the next chapter.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container section-padding">
          <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Reading Experience</h2>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Map size={32} /></div>
              <h3 className="heading-md">Discover & Browse</h3>
              <p className="text-muted">Discover new stories, browse different genres, and explore talented authors.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><BookOpen size={32} /></div>
              <h3 className="heading-md">Read Episodes</h3>
              <p className="text-muted">Read stories episode by episode, following your favorite ongoing series.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Sparkles size={32} /></div>
              <h3 className="heading-md">Follow Stories</h3>
              <p className="text-muted">Follow favorite stories, bookmark them, and always discover new episodes.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><RefreshCcw size={32} /></div>
              <h3 className="heading-md">Continue Reading</h3>
              <p className="text-muted">Easily pick up exactly where you left off and continue reading.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding container">
        <div className={styles.futureSection}>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Our Future</h2>
          <p className="text-lg text-muted" style={{ marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
            StoryEpisodes is designed to grow into a larger storytelling platform with future possibilities such as:
          </p>
          <ul className={styles.futureList}>
            <li>Premium stories</li>
            <li>Exclusive stories</li>
            <li>Early-access episodes</li>
            <li>Complete story access</li>
            <li>Bonus chapters</li>
            <li>Ad-free reading</li>
            <li>Members-only content</li>
            <li>Author opportunities</li>
            <li>Reader communities</li>
          </ul>
        </div>
      </section>

      <section className="section-padding container" style={{ textAlign: 'center' }}>
        <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Ready to start reading?</h2>
        <Link href="/stories">
          <Button variant="primary" size="large">Explore Stories</Button>
        </Link>
      </section>
    </div>
  );
}
