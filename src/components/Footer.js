import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Atharva Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 