import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export function Footer () {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <h2>Shop and Learn</h2>
          <div className="footer-content">
            <Link to="/signup">Sign up</Link>
            <Link to="/signin">Sign in</Link>
            <Link to="/itemlists">Item Lists</Link>
          </div>
        </div>
        <div className="footer-container">
          <h2>Support</h2>
          <div className="footer-content">
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="social">
        <SocialIcon url="https://twitter.com/" />
        <SocialIcon url="https://facebook.com/" />
        <SocialIcon url="https://www.instagram.com/" />
      </div>
      <p className="copyright">
        Copyright © 2022 HIVE TechWear. All rights reserved. <Link to="/policy">Privacy Policy</Link> | <Link to='/terms'>Term
        of Use Sales Policy</Link> | <Link to='/legal'>Legal</Link> | <Link to='/robots.txt'>Site Map</Link>
      </p>
    </footer>
  );
};

export default Footer;
