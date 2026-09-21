import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users, Globe, Award } from 'lucide-react';
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
              StoryEpisodes is a premium platform for serialized fiction, connecting talented authors with passionate readers around the world.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding container">
        <div className={styles.twoColumn}>
          <div className={styles.textContent}>
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
            <p className="text-lg text-muted" style={{ marginBottom: '1.5rem' }}>
              We believe that great stories have the power to transport us, transform us, and connect us. Our mission is to make serialized reading accessible, engaging, and rewarding for both creators and fans.
            </p>
            <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
              By breaking down epic narratives into bite-sized episodes, we've created a platform that fits perfectly into your daily routine, whether you're commuting, taking a break, or unwinding before bed.
            </p>
            
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <h3 className="heading-xl" style={{ color: 'var(--story-blue)' }}>500+</h3>
                <p className="text-muted">Original Stories</p>
              </div>
              <div className={styles.statItem}>
                <h3 className="heading-xl" style={{ color: 'var(--story-blue)' }}>50k+</h3>
                <p className="text-muted">Active Readers</p>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden' }}>
              <Image 
                src="/image copy 3.png" 
                alt="StoryEpisodes Reading Experience" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container section-padding">
          <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Read With Us?</h2>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><BookOpen size={32} /></div>
              <h3 className="heading-md">Curated Quality</h3>
              <p className="text-muted">Every story on our platform goes through an editorial process to ensure you're only reading the best.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Users size={32} /></div>
              <h3 className="heading-md">Community</h3>
              <p className="text-muted">Connect with authors and fellow readers. Share your theories and reactions as the story unfolds.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Globe size={32} /></div>
              <h3 className="heading-md">Read Anywhere</h3>
              <p className="text-muted">Our platform is optimized for every device, meaning your library goes wherever you go.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Award size={32} /></div>
              <h3 className="heading-md">Support Creators</h3>
              <p className="text-muted">When you read on StoryEpisodes, you're directly supporting the authors who write the stories you love.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding container" style={{ textAlign: 'center' }}>
        <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Ready to start reading?</h2>
        <p className="text-lg text-muted" style={{ marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Join thousands of readers and discover your next obsession today.
        </p>
        <Link href="/stories">
          <Button variant="primary" size="large">Explore Stories</Button>
        </Link>
      </section>
    </div>
  );
}
