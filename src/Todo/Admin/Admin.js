import React from 'react';
import Navbar from './Navbar/Navbar';
import Datos from './Datos/Datos'

import './Admin.css';

function Admin() {
  return (
    <div className="Admin-page">
      <Navbar />
      <Datos />
    </div>
  );
}

export default Admin;