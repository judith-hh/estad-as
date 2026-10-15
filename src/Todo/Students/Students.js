import React from 'react';
import Navbar from './Navbar/Navbar';
import InfoPersonal from './InfoPersonal/InfoPersonal';
import './Students.css';

function Students() {
  return (
    <div className="Students-page">
      <Navbar />
      <main className="Students-content">
        <InfoPersonal />
      </main>
    </div>
  );
}

export default Students;