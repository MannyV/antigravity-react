import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="fade-in" style={{
            padding: '10rem 0 6rem',
            textAlign: 'center',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="container">
                <h1 className="gradient-text" style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em'
                }}>
                    The Future of Web <br /> Development is Now
                </h1>
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--text-dim)',
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem',
                    lineHeight: 1.6
                }}>
                    Build stunning, high-performance web applications with our cutting-edge design system and optimized components.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="primary-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Get Started Free <ArrowRight size={18} />
                    </button>
                    <button className="secondary-btn">Documentation</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
