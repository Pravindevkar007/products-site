import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Jeeva Organic. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
