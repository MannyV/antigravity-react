import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container" style={{ padding: '10rem 0 6rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Antigravity</h1>
            <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Antigravity was founded with a single mission: to redefine the web development experience.
                    We believe that building powerful applications shouldn't come at the cost of simplicity or design.
                </p>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', lineHeight: '1.8' }}>
                    Our team is dedicated to creating tools that empower developers to build stunning, high-performance
                    interfaces that push the boundaries of what's possible on the web.
                </p>
            </div>
        </div>
    );
};

export default About;
