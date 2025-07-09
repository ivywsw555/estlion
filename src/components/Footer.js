import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      &copy; {currentYear} Estlion (Shanghai) Machinery Co. Ltd. All Rights Reserved.
    </footer>
  );
};

export default Footer;