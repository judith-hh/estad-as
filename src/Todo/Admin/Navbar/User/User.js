import React from 'react';
import './User.css';

function User({ usuario = "", rol = ""}) {
  return (
    <div className="User">


      {/* Perfil de Usuario */}
      <div className="usuario-container">
        <div className="avatar">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        
        <div className="datos">
          <span className="nombre">{usuario}</span>
          <span className="rol">{rol}</span>
        </div>
      </div>
    </div>
  );
}

export default User;