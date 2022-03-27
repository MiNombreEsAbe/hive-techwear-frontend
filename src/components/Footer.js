import React from "react";
import { Link } from "react-router-dom";
/**import { ContactUs } from './ContactUs';**/

export function Footer () {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <h2>Shop and Learn</h2>
          <div className="footer-content">
            <Link to="/sign-up">Sign up</Link>
            <Link to="/sign-in">Sign in</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <hr className="line" />
      <p className="copyright">
        Copyright © 2022 HIVE TechWear. All rights reserved. <Link to="/policy">Privacy Policy</Link> | <Link to='/terms'>Term
        of Use Sales Policy</Link> | <Link to='/legal'>Legal</Link> | <Link to='/xml'>Site Map</Link>
      </p>
    </footer>
  );
};

export default Footer;
