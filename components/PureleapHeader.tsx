import React, { useState } from 'react';


import PureleapLogo from './img/pureleap_logo_nobg.png';

interface HeaderProps {
  className?: string;
  visible?: boolean;
}

/**
 * Header component that provides navigation functionality
 * @param props - Component properties including visibility control
 * @returns Header component with responsive navigation
 */
export const PureleapHeader: React.FC<HeaderProps> = ({ className = '', visible = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`pureleap-header ${visible ? 'visible' : 'hidden'} ${className}`}>
      <div className="pureleap-container">
      <div className="pureleap-flex">
        {/* Logo */}
        <a href="https://pureleap.com" className="pureleap-logo-link">
          <img src={PureleapLogo.src} alt="Pureleap Logo" className="pureleap-logo" />
        </a>

        {/* Right side: Navigation and Mobile menu button */}
        <div className="pureleap-right">
          {/* Desktop Navigation */}
          <nav className="pureleap-nav">
            <a href="https://pureleap.com" className="pureleap-nav-link">
              Home
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="pureleap-mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Hamburger Icon</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`pureleap-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="pureleap-mobile-menu-list">
              <a href="/" className="pureleap-mobile-menu-item">
                Home
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
