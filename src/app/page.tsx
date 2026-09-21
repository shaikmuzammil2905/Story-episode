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
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/hero/desktop.png" 
            alt="Storytelling Desktop" 
            fill 
            className={`${styles.heroBgImg} ${styles.desktopHero}`}
            priority
          />
          <Image 
            src="/images/hero/mobile.png" 
            alt="Storytelling Mobile" 
            fill 
            className={`${styles.heroBgImg} ${styles.mobileHero}`}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className="heading-xl animate-fade-in">
              Discover Amazing Stories,<br/>One Episode at a Time
            </h1>
            <p className={`text-lg animate-fade-in ${styles.heroDelay}`}>
              Dive into captivating stories, follow your favorite series, and never miss an episode.
            </p>
            <div className={`animate-fade-in ${styles.heroDelay2} ${styles.heroActions}`}>
              <Button href="/stories" variant="primary">Start Reading</Button>
              <Button href="/genres" variant="secondary">Explore Stories</Button>
            </div>
            
            <div className={`animate-fade-in ${styles.heroDelay2} ${styles.heroSearch}`}>
              <div className={styles.searchBox}>
                <Search className={styles.searchIcon} size={24} />
                <input 
                  type="text" 
                  placeholder="Search stories, authors, genres..." 
                  className={styles.searchInput}
                />
                <Button variant="primary">Search</Button>
              </div>
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
          <h2 className="heading-lg text-center" style={{marginBottom: '4rem'}}>How StoryEpisodes Works</h2>
          <div className={styles.howItWorksWrapper}>
            <div className={styles.howList}>
              <Link href="/genres" className={styles.howItem}>
                <div className={styles.howNumber}>01</div>
                <div className={styles.howContent}>
                  <h3>Discover</h3>
                  <p>Explore stories and genres.</p>
                </div>
                <div className={styles.howIcon}><Search size={24} /></div>
              </Link>
              
              <Link href="/stories" className={styles.howItem}>
                <div className={styles.howNumber}>02</div>
                <div className={styles.howContent}>
                  <h3>Choose a Story</h3>
                  <p>Open a story and explore its episodes.</p>
                </div>
                <div className={styles.howIcon}><BookOpen size={24} /></div>
              </Link>
              
              <div className={styles.howItem}>
                <div className={styles.howNumber}>03</div>
                <div className={styles.howContent}>
                  <h3>Read an Episode</h3>
                  <p>Enjoy the story one episode at a time.</p>
                </div>
                <div className={styles.howIcon}><Smartphone size={24} /></div>
              </div>
              
              <div className={styles.howItem}>
                <div className={styles.howNumber}>04</div>
                <div className={styles.howContent}>
                  <h3>Continue the Journey</h3>
                  <p>Return and continue from where you stopped.</p>
                </div>
                <div className={styles.howIcon}><PlayCircle size={24} /></div>
              </div>
              
              <div className={styles.howItem}>
                <div className={styles.howNumber}>05</div>
                <div className={styles.howContent}>
                  <h3>Follow & Discover</h3>
                  <p>Follow stories and discover new episodes.</p>
                </div>
                <div className={styles.howIcon}><Bell size={24} /></div>
              </div>
            </div>
            
            <div className={styles.howVisual}>
              <Image 
                src="https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=800&q=80" 
                alt="Story discovery journey" 
                fill 
                className={styles.howImg}
              />
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
