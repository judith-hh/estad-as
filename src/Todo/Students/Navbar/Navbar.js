import React, { useState } from 'react';
import Logo from './Logo/Logo';
import './Navbar.css';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        {/* Isotipo y Nombre */}
        <Logo />
      </div>
    </nav>
  );
}

export default Navbar;