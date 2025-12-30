import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="glass" style={{
            padding: '2.5rem',
            borderRadius: '24px',
            transition: 'var(--transition)',
            height: '100%',
            cursor: 'pointer',
            textAlign: 'left'
        }}>
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(138, 43, 226, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--accent-primary)'
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>{title}</h3>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.6 }}>{description}</p>
        </div>
    );
};

export default FeatureCard;
