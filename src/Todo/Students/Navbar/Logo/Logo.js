import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div className="Logo">
      <svg
        className="Logo-icon"
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        
      >
        <defs>
          <linearGradient id="descubreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef5522" />
            <stop offset="50%" stopColor="#E6003A" />
            <stop offset="10%" stopColor="#ef5522" />
          </linearGradient>
          <linearGradient id="innerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E6003A" />
            <stop offset="10%" stopColor="#ef5522" />
          </linearGradient>
        </defs>

        {/* Cierre / Marco externo de la 'D' */}
        <path
          d="M 20 10 
             H 55 
             C 80 10, 95 30, 95 50 
             C 95 70, 80 90, 55 90 
             H 20 
             Z"
          fill="url(#descubreGrad)"
        />

        {/* Calado/Ojo interior característico del Museo Descubre */}
        <path
          d="M 20 50 
             Q 45 35, 65 50 
             Q 45 65, 20 50 
             Z"
          fill="#FFFFFF"
        />

        {/* Núcleo / Pila/ Ojo central */}
        <circle cx="50" cy="50" r="6" fill="url(#innerGrad)" />
      </svg>

      <div className="Logo-texto">
        <span className="marca">DESCUBRE</span>
        <span className="subtitulo">MUSEO INTERACTIVO</span>
      </div>
    </div>
   
  );
}

export default Logo;