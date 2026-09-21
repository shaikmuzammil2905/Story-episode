import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/Button';

export default function RegisterPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--soft-cream)', padding: '2rem 1rem' }}>
      <div style={{ background: 'var(--white)', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', width: '100%', maxWidth: '480px', textAlign: 'center' }}>
        
        <Link href="/" style={{ display: 'inline-block', marginBottom: '2rem' }}>
          <Image src="/logo.png" alt="StoryEpisodes" width={180} height={48} />
        </Link>
        
        <h1 className="heading-lg" style={{ marginBottom: '0.5rem' }}>Create an Account</h1>
        <p className="text-muted" style={{ marginBottom: '2.5rem' }}>Join StoryEpisodes and discover your next favorite story.</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--deep-navy)' }}>Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid var(--subtle-gray)', outline: 'none', background: 'var(--soft-cream)', fontSize: '1rem' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--deep-navy)' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid var(--subtle-gray)', outline: 'none', background: 'var(--soft-cream)', fontSize: '1rem' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--deep-navy)' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid var(--subtle-gray)', outline: 'none', background: 'var(--soft-cream)', fontSize: '1rem' }}
            />
          </div>
          
          <Button variant="primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
            Create Account
          </Button>
        </form>
        
        <div style={{ marginTop: '2.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link href="/login" style={{ color: 'var(--story-blue)', fontWeight: 600 }}>Sign in</Link>
        </div>
      </div>
    </div>
  );
}
