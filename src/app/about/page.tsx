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
            <h1 className="heading-xl">ABOUT STORYEPISODES</h1>
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
                src="/images/about-visual.jpg" 
                alt="Storytelling and reading" 
                fill 
                className={styles.aboutImage}
              />
            </div>
          </div>
          <div className={styles.textContent}>
            <p className="text-lg text-muted" style={{ marginBottom: '1.5rem' }}>
              Our idea is simple:
            </p>
            <div className={styles.ideaList}>
              <div className={styles.ideaItem}>
                <span className={styles.number}>01 /</span>
                <span className={styles.content}>Read</span>
              </div>
              <div className={styles.ideaItem}>
                <span className={styles.number}>02 /</span>
                <span className={styles.content}>Explore</span>
              </div>
              <div className={styles.ideaItem}>
                <span className={styles.number}>03 /</span>
                <span className={styles.content}>Keep Coming Back</span>
              </div>
            </div>
            <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
              StoryEpisodes makes it easier to discover engaging stories, explore different genres, follow ongoing series and continue reading episode by episode.
            </p>
            
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>WHY STORYEPISODES?</h2>
            <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
              Stories become more exciting when there is always another episode waiting.
            </p>
            <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
              StoryEpisodes is designed around episodic storytelling, helping readers discover new worlds, characters and adventures while giving them a reason to return for the next chapter.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container section-padding">
          <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '4rem' }}>OUR READING EXPERIENCE</h2>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Map size={32} /></div>
              <h3 className="heading-md">Discover & Browse</h3>
              <p className="text-muted">Discover new stories and browse different genres</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><BookOpen size={32} /></div>
              <h3 className="heading-md">Read Episodes</h3>
              <p className="text-muted">Read episodes and explore authors</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Sparkles size={32} /></div>
              <h3 className="heading-md">Follow Stories</h3>
              <p className="text-muted">Follow favorite stories and bookmark them</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><RefreshCcw size={32} /></div>
              <h3 className="heading-md">Continue Reading</h3>
              <p className="text-muted">Continue reading and discover new episodes</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding container">
        <div className={styles.futureSection}>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>OUR FUTURE</h2>
          <p className="text-lg text-muted" style={{ marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
            StoryEpisodes is designed to grow into a larger storytelling platform with future possibilities such as:
          </p>
          <div className={styles.futureList}>
            <div className={styles.futureItem}><span className={styles.bullet}>•</span><span className={styles.content}>Premium stories</span></div>
            <div className={styles.futureItem}><span className={styles.bullet}>•</span><span className={styles.content}>Exclusive stories</span></div>
            <div className={styles.futureItem}><span className={styles.bullet}>•</span><span className={styles.content}>Early-access episodes</span></div>
            <div className={styles.futureItem}><span className={styles.bullet}>•</span><span className={styles.content}>Complete story access</span></div>
            <div className={styles.futureItem}><span className={styles.bullet}>•</span><span className={styles.content}>Bonus chapters</span></div>
            <div className={styles.futureItem}><span className={styles.bullet}>•</span><span className={styles.content}>Ad-free reading</span></div>
            <div className={styles.futureItem}><span className={styles.bullet}>•</span><span className={styles.content}>Members-only content</span></div>
            <div className={styles.futureItem}><span className={styles.bullet}>•</span><span className={styles.content}>Author opportunities</span></div>
            <div className={styles.futureItem}><span className={styles.bullet}>•</span><span className={styles.content}>Reader communities</span></div>
          </div>
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

