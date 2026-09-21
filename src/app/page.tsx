import Link from 'next/link';
import { Search, BookOpen, Clock, Heart, ChevronRight, PlayCircle } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className="heading-xl animate-fade-in">Discover Amazing Stories, One Episode at a Time</h1>
            <p className={`text-lg text-muted animate-fade-in ${styles.heroDelay}`}>
              Dive into captivating stories, follow your favorite series, explore new genres, and never miss an episode.
            </p>
            <div className={`animate-fade-in ${styles.heroDelay2} ${styles.heroActions}`}>
              <Link href="/stories" className="btn-primary">Start Reading</Link>
              <Link href="/genres" className="btn-secondary">Explore Stories</Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            {/* Using a placeholder visual that implies storytelling/books */}
            <div className={styles.heroVisual}>
              <div className={styles.bookStack}></div>
              <div className={styles.bookMain}>
                <div className={styles.bookCover}>StoryEpisodes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Search Section */}
      <section className={styles.searchSection}>
        <div className="container">
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} size={24} />
            <input 
              type="text" 
              placeholder="Search by story title, author, genre or keywords..." 
              className={styles.searchInput}
            />
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </section>

      {/* Categories / Genres */}
      <section className={`section-padding ${styles.categoriesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg">Browse by Genre</h2>
            <Link href="/genres" className={styles.viewAll}>
              View All <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className={styles.categoryGrid}>
            {['Fantasy', 'Romance', 'Mystery', 'Thriller', 'Sci-Fi', 'Horror', 'Adventure', 'Short Stories'].map((genre) => (
              <Link href={`/genres/${genre.toLowerCase().replace(' ', '-')}`} key={genre} className={styles.categoryCard}>
                <div className={styles.categoryIcon}>
                  <BookOpen size={24} />
                </div>
                <h3>{genre}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className={`section-padding ${styles.featuredSection}`}>
        <div className="container">
          <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Featured Stories</h2>
          <div className={styles.storyGrid}>
            {/* Story Card 1 */}
            <div className="card">
              <div className={styles.storyCover} style={{ background: 'linear-gradient(45deg, #1e3a8a, #3b82f6)' }}></div>
              <div className={styles.storyInfo}>
                <div className={styles.badges}>
                  <span className={styles.badgeGenre}>Mystery</span>
                  <span className={styles.badgeFree}>Free</span>
                </div>
                <h3 className="heading-md">The Secret of the Old House</h3>
                <p className="text-muted text-sm">By Alex Sterling</p>
                <p className={styles.storyDesc}>
                  A young detective uncovers dark secrets in a forgotten mansion. What lies beneath the floorboards?
                </p>
                <div className={styles.storyMeta}>
                  <span><BookOpen size={16}/> 12 Episodes</span>
                  <span><Heart size={16}/> 1.2k</span>
                </div>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="card">
              <div className={styles.storyCover} style={{ background: 'linear-gradient(45deg, #b45309, #f59e0b)' }}></div>
              <div className={styles.storyInfo}>
                <div className={styles.badges}>
                  <span className={styles.badgeGenre}>Fantasy</span>
                  <span className={styles.badgePremium}>Premium</span>
                </div>
                <h3 className="heading-md">Wings of Tomorrow</h3>
                <p className="text-muted text-sm">By Sarah Chen</p>
                <p className={styles.storyDesc}>
                  In a world where magic is outlawed, one girl discovers she has the power to change everything.
                </p>
                <div className={styles.storyMeta}>
                  <span><BookOpen size={16}/> 45 Episodes</span>
                  <span><Heart size={16}/> 8.5k</span>
                </div>
              </div>
            </div>

            {/* Story Card 3 */}
            <div className="card">
              <div className={styles.storyCover} style={{ background: 'linear-gradient(45deg, #064e3b, #10b981)' }}></div>
              <div className={styles.storyInfo}>
                <div className={styles.badges}>
                  <span className={styles.badgeGenre}>Romance</span>
                  <span className={styles.badgeFree}>Free</span>
                </div>
                <h3 className="heading-md">Midnight Coffee</h3>
                <p className="text-muted text-sm">By James Walker</p>
                <p className={styles.storyDesc}>
                  Two strangers keep meeting at a 24/7 diner. Is it coincidence, or something more?
                </p>
                <div className={styles.storyMeta}>
                  <span><BookOpen size={16}/> 8 Episodes</span>
                  <span><Heart size={16}/> 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Reading (Mock for Visitor) */}
      <section className={`section-padding ${styles.continueSection}`}>
        <div className="container">
          <div className={styles.continueBox}>
            <div className={styles.continueInfo}>
              <h2 className="heading-lg">Continue Reading</h2>
              <p className="text-muted">Start reading a story and your progress will appear here.</p>
              <Link href="/stories" className="btn-primary" style={{ marginTop: '1rem' }}>
                Find a Story <PlayCircle size={20} />
              </Link>
            </div>
            <div className={styles.continueVisual}>
              <Clock size={64} className={styles.clockIcon} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
