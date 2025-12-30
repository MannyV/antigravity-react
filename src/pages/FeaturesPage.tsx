import React from 'react';
import { Zap, Shield, Rocket, Cpu, Globe, Infinity } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const FeaturesPage: React.FC = () => {
    const allFeatures = [
        {
            icon: <Zap size={24} />,
            title: 'Lightning Fast',
            description: 'Optimized for performance with Zero-runtime overhead.'
        },
        {
            icon: <Shield size={24} />,
            title: 'Secure by Default',
            description: 'Enterprise-grade security built into every layer.'
        },
        {
            icon: <Rocket size={24} />,
            title: 'Rapid Deployment',
            description: 'Ship your applications faster with automated pipelines.'
        },
        {
            icon: <Cpu size={24} />,
            title: 'Modern Architecture',
            description: 'Built on top of the latest web technologies.'
        },
        {
            icon: <Globe size={24} />,
            title: 'Global Scale',
            description: 'Deploy to edge locations worldwide with one click.'
        },
        {
            icon: <Infinity size={24} />,
            title: 'Limitless Extension',
            description: 'Powerful plugin system to extend functionality.'
        }
    ];

    return (
        <div className="container" style={{ padding: '10rem 0 6rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Features</h1>
            <p style={{ color: 'var(--text-dim)', marginBottom: '4rem', maxWidth: '600px' }}>
                Explore the full potential of Antigravity with our comprehensive suite of tools and features.
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {allFeatures.map((f, i) => (
                    <FeatureCard key={i} {...f} />
                ))}
            </div>
        </div>
    );
};

export default FeaturesPage;
