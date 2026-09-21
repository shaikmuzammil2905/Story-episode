import React from 'react';
import { Search, Filter } from 'lucide-react';
import styles from './page.module.css';
import { mockStories, mockGenres, mockCategories } from '../../data/mockData';
import StoryCard from '../../components/StoryCard';
import Button from '../../components/Button';

export default function StoriesPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h1 className="heading-xl">All Stories</h1>
          <p className="text-muted">Discover our complete collection of stories.</p>
        </div>

        {/* Filters and Search */}
        <div className={styles.filtersSection}>
          <div className={styles.searchBox}>
            <Search size={20} className={styles.searchIcon} />
            <input type="text" placeholder="Search stories..." className={styles.searchInput} />
          </div>
          
          <div className={styles.filters}>
            <select className={styles.select}>
              <option value="">All Genres</option>
              {mockGenres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
            <select className={styles.select}>
              <option value="">All Categories</option>
              {mockCategories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <select className={styles.select}>
              <option value="">Any Status</option>
              <option value="free">Free</option>
              <option value="premium">Premium</option>
            </select>
            <Button variant="primary">Apply</Button>
          </div>
        </div>

        {/* Story Grid */}
        <div className={styles.storyGrid}>
          {mockStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
