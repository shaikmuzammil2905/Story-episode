'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            <Image src="/footer-logo.png" alt="StoryEpisodes" width={180} height={48} className={styles.logoImage} />
          </Link>
          <p className={styles.tagline}>Read • Explore • Keep Coming Back</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 2.8 12s.9.1 2.2-.1C2 9.5 2 6 2 6s.9.4 2 .5c-1.3-1-2.4-4-1.5-6.5C4.7 2 10.3 5 10.3 5s1.2-2.1 4.2-2.1c3.1 0 5.6 2.5 5.6 5.6 0 .3 0 .7-.1 1.1 1.3-.9 2-2 2-2z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h3>Quick Links</h3>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/genres">Genres</Link>
            <Link href="/authors">Authors</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.linksCol}>
          <h3>Legal</h3>
          <nav>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Cookie Policy</Link>
          </nav>
        </div>

        <div className={styles.contactCol}>
          <h3>Get in Touch</h3>
          <a href="tel:+918790349941" className={styles.contactLink}>
            <Phone size={18} />
            +91 8790 349941
          </a>
          <a href="https://wa.me/918790349941?text=Hello%20StoryEpisodes,%20I%20would%20like%20to%20know%20more%20about%20the%20platform." className={styles.contactLink} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            WhatsApp Us
          </a>
          
          <div className={styles.newsletter}>
            <p>Get notified about new stories and episodes.</p>
            <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} StoryEpisodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
