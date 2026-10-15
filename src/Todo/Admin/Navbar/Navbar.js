import React, { useState } from 'react';
import Logo from './Logo/Logo';
import './Navbar.css';
import UserActions from './User/User';

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
        <UserActions/>

     
            {/*<a href="#comprar" className="Navbar-btn" onClick={() => setMenuOpen(false)}>
              Planear Visita
            </a> */}
          
      </div>
    </nav>
  );
}

export default Navbar;