'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../../components/Button';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <header className={styles.header}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="heading-xl">Get in Touch</h1>
          <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Have a question, feedback, or want to publish your story with us? We'd love to hear from you.
          </p>
        </div>
      </header>

      <div className="container section-padding">
        <div className={styles.twoColumn}>
          <div className={styles.contactInfo}>
            <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Contact Information</h2>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Phone size={24} /></div>
                <div>
                  <h3 className="text-lg" style={{ fontWeight: 600 }}>Phone / WhatsApp</h3>
                  <p className="text-muted" style={{ marginBottom: '0.5rem' }}>+91 8790 349941</p>
                  <a href="https://wa.me/918790349941" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--story-blue)', fontWeight: 500 }}>Message us on WhatsApp</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail size={24} /></div>
                <div>
                  <h3 className="text-lg" style={{ fontWeight: 600 }}>Email</h3>
                  <p className="text-muted">support@storyepisodes.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <div>
                  <h3 className="text-lg" style={{ fontWeight: 600 }}>Office</h3>
                  <p className="text-muted">Hyderabad, Telangana<br/>India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Send us a Message</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={e => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="Your email address" />
              </div>
              
              <div className={styles.formGroup}>
                <label>Subject</label>
                <select>
                  <option value="general">General Inquiry</option>
                  <option value="author">Publishing as an Author</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea rows={5} placeholder="How can we help you?"></textarea>
              </div>
              
              <Button variant="primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <Send size={18} /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
