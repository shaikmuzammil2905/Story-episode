'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, BookOpen, User } from 'lucide-react';
import styles from './SearchModal.module.css';
import { mockStories, mockAuthors } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredStories = query ? mockStories.filter(s => 
    s.title.toLowerCase().includes(query.toLowerCase()) || 
    s.authorName.toLowerCase().includes(query.toLowerCase())
  ) : [];

  const filteredAuthors = query ? mockAuthors.filter(a => 
    a.name.toLowerCase().includes(query.toLowerCase())
  ) : [];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search stories, authors, or genres..." 
              value={query}
              onChange={e => setQuery(e.target.value)}
              className={styles.searchInput}
            />
            {query && (
              <button className={styles.clearBtn} onClick={() => setQuery('')}>
                <X size={16} />
              </button>
            )}
          </div>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
        </div>

        <div className={styles.results}>
          {!query ? (
            <div className={styles.emptyState}>
              <Search size={48} className={styles.emptyIcon} />
              <p>Type to start searching...</p>
            </div>
          ) : filteredStories.length === 0 && filteredAuthors.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No results found for "{query}"</p>
            </div>
          ) : (
            <div className={styles.resultsList}>
              {filteredStories.length > 0 && (
                <div className={styles.resultGroup}>
                  <h3>Stories</h3>
                  {filteredStories.map(story => (
                    <Link href={`/story/${story.id}`} key={story.id} className={styles.resultItem} onClick={onClose}>
                      <BookOpen size={16} className={styles.resultIcon} />
                      <div className={styles.resultInfo}>
                        <span className={styles.resultTitle}>{story.title}</span>
                        <span className={styles.resultSubtitle}>by {story.authorName}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              
              {filteredAuthors.length > 0 && (
                <div className={styles.resultGroup}>
                  <h3>Authors</h3>
                  {filteredAuthors.map(author => (
                    <Link href={`/authors/${author.id}`} key={author.id} className={styles.resultItem} onClick={onClose}>
                      <User size={16} className={styles.resultIcon} />
                      <div className={styles.resultInfo}>
                        <span className={styles.resultTitle}>{author.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
