import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseClass = `${styles.btn} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]} ${fullWidth ? styles.fullWidth : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
