import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { Zap, Shield, Rocket, Cpu } from 'lucide-react';

const Home: React.FC = () => {
    const features = [
        {
            icon: <Zap size={24} />,
            title: 'Lightning Fast',
            description: 'Optimized for performance with Zero-runtime overhead and instant loading.'
        },
        {
            icon: <Shield size={24} />,
            title: 'Secure by Default',
            description: 'Enterprise-grade security built into every layer of your application.'
        },
        {
            icon: <Rocket size={24} />,
            title: 'Rapid Deployment',
            description: 'Ship your applications faster with our automated CI/CD pipelines.'
        },
        {
            icon: <Cpu size={24} />,
            title: 'Modern Architecture',
            description: 'Built on top of the latest web technologies for maximum scalability.'
        }
    ];

    return (
        <>
            <Hero />
            <section id="features" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="fade-in" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                            Powerful Features
                        </h2>
                        <p className="fade-in" style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                            Everything you need to build the next generation of web applications.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                    }}>
                        {features.map((feature, index) => (
                            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <FeatureCard {...feature} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="cta" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="glass" style={{
                        padding: '4rem',
                        borderRadius: '32px',
                        textAlign: 'center',
                        background: 'linear-gradient(rgba(138, 43, 226, 0.05), rgba(0, 210, 255, 0.05))',
                        border: '1px solid var(--glass-border)'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                            Ready to start building?
                        </h2>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                            Join thousands of developers building amazing projects with Antigravity.
                        </p>
                        <button className="primary-btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Get Started for Free
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
