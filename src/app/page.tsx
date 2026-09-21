import Link from 'next/link';
import { Search, ChevronRight, PlayCircle, Clock, BookOpen, Smartphone, Bell, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';
import { mockStories, mockGenres } from '../data/mockData';
import StoryCard from '../components/StoryCard';
import GenreCard from '../components/GenreCard';
import Button from '../components/Button';

export default function Home() {
  const featuredStories = mockStories.filter(s => s.isFeatured).slice(0, 3);
  const trendingStories = mockStories.filter(s => s.isTrending).slice(0, 3);
  const latestStories = [...mockStories].reverse().slice(0, 3);

  return (
    <div className={styles.homeWrapper}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className="heading-xl animate-fade-in">
              Discover Amazing Stories,<br/>One Episode at a Time
            </h1>
            <p className={`text-lg text-muted animate-fade-in ${styles.heroDelay}`}>
              Dive into captivating stories, follow your favorite series, explore new genres, and never miss an episode.
            </p>
            <div className={`animate-fade-in ${styles.heroDelay2} ${styles.heroActions}`}>
              <Button href="/stories" variant="primary">Start Reading</Button>
              <Button href="/genres" variant="secondary">Explore Stories</Button>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroVisual}>
              <Image 
                src="/images/hero/main.jpg" 
                alt="Storytelling" 
                fill 
                className={styles.heroImg}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search Section */}
      <section className={styles.searchSection}>
        <div className="container">
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} size={24} />
            <input 
              type="text" 
              placeholder="Search by story title, author, genre or keywords..." 
              className={styles.searchInput}
            />
            <Button variant="primary">Search</Button>
          </div>
        </div>
      </section>

      {/* 3. Featured Stories */}
      <section className={`section-padding ${styles.featuredSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg">Featured Stories</h2>
            <Link href="/stories" className={styles.viewAll}>
              View All <ChevronRight size={18} />
            </Link>
          </div>
          <div className={styles.storyGrid}>
            {featuredStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Explore by Genre */}
      <section className={`section-padding ${styles.genresSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg">Explore by Genre</h2>
            <Link href="/genres" className={styles.viewAll}>
              View All <ChevronRight size={18} />
            </Link>
          </div>
          <div className={styles.genreGrid}>
            {mockGenres.slice(0, 4).map(genre => (
              <GenreCard key={genre.id} genre={genre} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trending Stories */}
      <section className={`section-padding ${styles.trendingSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg"><TrendingUp size={28} style={{marginRight: 8, color: 'var(--warm-gold)'}} /> Popular & Trending</h2>
            <Link href="/stories?sort=trending" className={styles.viewAll}>
              View All <ChevronRight size={18} />
            </Link>
          </div>
          <div className={styles.storyGrid}>
            {trendingStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. How StoryEpisodes Works */}
      <section className={`section-padding ${styles.howItWorksSection}`}>
        <div className="container">
          <h2 className="heading-lg text-center" style={{marginBottom: '3rem'}}>How StoryEpisodes Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}><Search size={32} /></div>
              <h3>01 Discover</h3>
              <p>Browse through hundreds of unique stories across different genres.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}><BookOpen size={32} /></div>
              <h3>02 Choose</h3>
              <p>Pick a story that captures your imagination and dive right in.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}><Smartphone size={32} /></div>
              <h3>03 Read</h3>
              <p>Enjoy a comfortable, distraction-free reading experience on any device.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}><Bell size={32} /></div>
              <h3>04 Follow</h3>
              <p>Bookmark your favorites and get notified of new episodes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Continue Reading */}
      <section className={`section-padding ${styles.continueSection}`}>
        <div className="container">
          <div className={styles.continueBox}>
            <div className={styles.continueInfo}>
              <h2 className="heading-lg">Continue Reading</h2>
              <p className="text-muted">Start reading a story and your progress will appear here.</p>
              <Button href="/stories" variant="primary" className={styles.marginTop}>
                Find a Story <PlayCircle size={20} />
              </Button>
            </div>
            <div className={styles.continueVisual}>
              <Clock size={64} className={styles.clockIcon} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Latest Stories */}
      <section className={`section-padding ${styles.latestSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-lg">Latest Stories</h2>
            <Link href="/stories?sort=new" className={styles.viewAll}>
              View All <ChevronRight size={18} />
            </Link>
          </div>
          <div className={styles.storyGrid}>
            {latestStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Reader Benefits */}
      <section className={`section-padding ${styles.benefitsSection}`}>
        <div className="container">
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitsContent}>
              <h2 className="heading-lg">Why Read With Us?</h2>
              <ul className={styles.benefitsList}>
                <li><Star size={20} /> Premium quality stories selected by editors</li>
                <li><Star size={20} /> Mobile-first distraction-free reading</li>
                <li><Star size={20} /> Direct support for your favorite authors</li>
                <li><Star size={20} /> Regular episode updates so you are never bored</li>
              </ul>
              <Button href="/stories" variant="secondary">Start Your Journey</Button>
            </div>
            <div className={styles.benefitsVisual}>
              <Image 
                src="https://images.unsplash.com/photo-1522881115234-df190f074d2b?w=800&q=80" 
                alt="Reading on phone" 
                fill 
                className={styles.benefitsImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Future Premium Content Section */}
      <section className={`section-padding ${styles.premiumSection}`}>
        <div className="container text-center">
          <h2 className="heading-lg" style={{ color: 'var(--white)' }}>Unlock Premium Stories (Coming Soon)</h2>
          <p style={{ color: 'var(--soft-cream)', maxWidth: '600px', margin: '1rem auto 2rem' }}>
            Get ready to experience exclusive stories, early access to episodes, and ad-free reading with our upcoming Premium subscription.
          </p>
          <Button variant="secondary">Join the Waitlist</Button>
        </div>
      </section>

      {/* 11. Newsletter */}
      <section className={`section-padding ${styles.newsletterSection}`}>
        <div className="container text-center">
          <h2 className="heading-lg">Never Miss an Episode</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '1rem auto 2rem' }}>
            Subscribe to our newsletter to get notified about new stories, episodes, and platform updates.
          </p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email address" className={styles.newsletterInput} />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
