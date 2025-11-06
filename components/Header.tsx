import React from 'react';
import { Page } from '../types';
// Define the props interface for the Header component.
interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

// The navigation items are stored in an array of objects for easier mapping.
const navItems = [
  { label: 'Home', page: Page.Home },
  { label: 'Our Services', page: Page.Services },
  { label: 'Collaboration', page: Page.Collaboration },
];

function SearchIcon() {
    return (
        <div className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    );
}

function Header({ currentPage, setCurrentPage }: HeaderProps) {
  return (
    <header id="main-header">
      <div className="container header-container">
        {/* Logo Section */}
        <div 
          className="logo-container"
          onClick={() => setCurrentPage(Page.Home)}
        >
          <img src="https://i.imgur.com/uFgtBCX.png" alt="Lycaon Logo" className="logo-img" />
        </div>

        {/* Navigation Links Section */}
        <nav id="main-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setCurrentPage(item.page)}
              // Dynamically apply the 'active' class based on the current page.
              className={currentPage === item.page ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
           <SearchIcon />
        </nav>

        {/* Mobile Menu Icon (Placeholder) */}
        <div id="mobile-menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </header>
  );
}


export default Header;