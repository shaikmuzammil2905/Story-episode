'use client';

import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Share } from 'lucide-react';
import styles from './ShareModal.module.css';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export default function ShareModal({ isOpen, onClose, url, title }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`, '_blank');
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Share this story</h3>
          <button onClick={onClose} className={styles.closeBtn}><X size={20} /></button>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.actionBtn} onClick={shareToWhatsApp}>
            <div className={`${styles.iconCircle} ${styles.whatsapp}`}><MessageCircle size={24} /></div>
            <span>WhatsApp</span>
          </button>
          
          <button className={styles.actionBtn} onClick={shareNative}>
            <div className={`${styles.iconCircle} ${styles.native}`}><Share size={24} /></div>
            <span>Share</span>
          </button>
          
          <button className={styles.actionBtn} onClick={handleCopy}>
            <div className={`${styles.iconCircle} ${styles.copy}`}>
              {copied ? <Check size={24} /> : <Copy size={24} />}
            </div>
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
