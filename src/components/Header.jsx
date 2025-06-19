import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Put your logo here

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="PathViz Logo" className="app-logo" />
        <h1 className="app-title">Algorithm Visualizer</h1>
      </div>
    </header>
  );
};

export default Header;
