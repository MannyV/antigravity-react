import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="container" style={{ padding: '10rem 0 6rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get in Touch</h1>
            <p style={{ color: 'var(--text-dim)', marginBottom: '4rem' }}>
                Have questions? We'd love to hear from you.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Name</label>
                            <input type="text" style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '8px',
                                padding: '0.8rem',
                                color: 'white',
                                outline: 'none'
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Email</label>
                            <input type="email" style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '8px',
                                padding: '0.8rem',
                                color: 'white',
                                outline: 'none'
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Message</label>
                            <textarea rows={4} style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '8px',
                                padding: '0.8rem',
                                color: 'white',
                                outline: 'none',
                                resize: 'none'
                            }} />
                        </div>
                        <button className="primary-btn" type="button">Send Message</button>
                    </form>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div className="glass" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px' }}>
                            <Mail className="gradient-text" />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 700 }}>Email</h4>
                            <p style={{ color: 'var(--text-dim)' }}>hello@antigravity.io</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div className="glass" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px' }}>
                            <Phone className="gradient-text" />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 700 }}>Phone</h4>
                            <p style={{ color: 'var(--text-dim)' }}>+1 (555) 000-0000</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div className="glass" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px' }}>
                            <MessageSquare className="gradient-text" />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 700 }}>Support</h4>
                            <p style={{ color: 'var(--text-dim)' }}>24/7 dedicated assistance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
