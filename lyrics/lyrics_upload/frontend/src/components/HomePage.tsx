import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/homepage.css';
import { useHomePageNavigation } from '../utils/HomePage';

const HomePage: React.FC = () => {
  const { handleNavClick, initializeAnimations } = useHomePageNavigation();

  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="floating-elements">
          <div className="floating-note">🎵</div>
          <div className="floating-note">🎶</div>
          <div className="floating-note">🎤</div>
        </div>
        <h1>🎵 Welcome to Any Lyrics  🎵</h1>
        <p>
          Discover, share, and explore lyrics from your favorite songs in our
          vibrant community driven platform
        </p>
        <div className="button-container">
          <button
            className="btn btn-primary"
            onClick={() => handleNavClick('add')}
          >
            ✨ Add Your Lyrics
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleNavClick('lyrics')}
          >
            🚀 Explore Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2 className="section-title">🎶 Explore Lyrics Features 🎶</h2>
        <p className="section-subtitle">
          Dive into our amazing features designed to make your musical journey
          unforgettable
        </p>
        <div className="grid">
          <div className="card" onClick={() => handleNavClick('lyrics')}>
            <span className="card-icon">📚</span>
            <h3>View All Lyrics</h3>
            <p>Browse our extensive collection of lyrics from every genre and era</p>
            <NavLink to="/lyrics" className="card-link">
              Explore Collection →
            </NavLink>
          </div>
          <div className="card" onClick={() => handleNavClick('add')}>
            <span className="card-icon">✨</span>
            <h3>Add Lyrics</h3>
            <p>Share your favorite lyrics and contribute to our growing community</p>
            <NavLink to="/add" className="card-link">
              Share Now →
            </NavLink>
          </div>
          <div className="card" onClick={() => handleNavClick('search')}>
            <span className="card-icon">🔍</span>
            <h3>Search Lyrics</h3>
            <p>Find any song lyrics instantly by title, artist, or line you remember</p>
            <NavLink to="/search" className="card-link">
              Start Searching →
            </NavLink>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2
          className="section-title"
          style={{ color: 'white', marginBottom: '50px' }}
        >
          🌟 Join Our Musical Community 🌟
        </h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-icon">🎵</span>
            <div className="stat-number">50K+</div>
            <div className="stat-label">Songs</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🎤</span>
            <div className="stat-number">25K+</div>
            <div className="stat-label">Artists</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">👥</span>
            <div className="stat-number">100K+</div>
            <div className="stat-label">Users</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">👁️</span>
            <div className="stat-number">1M+</div>
            <div className="stat-label">Views</div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2
          className="section-title"
          style={{ color: 'white', marginBottom: '20px' }}
        >
          🔔 Stay in the Loop!
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          Get notified about new lyrics, featured artists, and community updates
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button className="btn btn-primary">Subscribe 🚀</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div>
              <h3>🎵 Lyrics DB</h3>
              <p>Your ultimate destination for music lyrics and community</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                <div onClick={() => handleNavClick('lyrics')}>
                  Browse Lyrics
                </div>
                <div onClick={() => handleNavClick('add')}>Add Songs</div>
                <div onClick={() => handleNavClick('search')}>Search</div>
              </div>
            </div>
            <div>
              <h4>Community</h4>
              <div className="footer-links">
                <div>Artists</div>
                <div>Contributors</div>
                <div>Featured Songs</div>
              </div>
            </div>
            <div>
              <h4>Connect</h4>
              <div className="social-icons">
                <span>📱</span>
                <span>🐦</span>
                <span>📘</span>
                <span>📷</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Lyrics Database. Made with ❤️ for music lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;