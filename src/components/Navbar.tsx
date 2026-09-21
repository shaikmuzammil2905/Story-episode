'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Bell, Menu, X, Bookmark, User } from 'lucide-react';
import styles from './Navbar.module.css';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Mobile Hamburger */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="StoryEpisodes" width={150} height={40} className={styles.logoImage} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/stories" className={styles.navLink}>Stories</Link>
          <Link href="/genres" className={styles.navLink}>Genres</Link>
          <Link href="/authors" className={styles.navLink}>Authors</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search" onClick={() => setSearchOpen(true)}>
            <Search size={20} />
          </button>
          <Link href="/library" className={`${styles.iconBtn} ${styles.desktopOnly}`} aria-label="Library">
            <Bookmark size={20} />
          </Link>
          <Link href="/login" className={styles.profileBtn}>
            <User size={18} />
            <span className={styles.desktopOnly}>Sign In</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
            <Image src="/logo.png" alt="StoryEpisodes" width={120} height={32} className={styles.logoImage} />
          </Link>
          <button 
            className={styles.closeBtn} 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className={styles.mobileNavLinks}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/stories" onClick={() => setMobileMenuOpen(false)}>Stories</Link>
          <Link href="/genres" onClick={() => setMobileMenuOpen(false)}>Genres</Link>
          <Link href="/authors" onClick={() => setMobileMenuOpen(false)}>Authors</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
        <div className={styles.drawerFooter}>
          <Link href="/login" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>
            Sign In / Register
          </Link>
        </div>
      </div>
      
      {/* Overlay */}
      {mobileMenuOpen && (
        <div className={styles.overlay} onClick={() => setMobileMenuOpen(false)} />
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
