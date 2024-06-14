import React from "react";
import "./Footer.css";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="left">
          <img src={Logo} height={100} width={100} alt="logo" />
          <span>instapix.app</span>
        </div>
        <div className="mid">
          <span className="footer-title">Support</span>
          <div className="footer-links">
            <a
              href="mailto:contact.support@instapix.app"
              target="_blank"
              rel="noreferrer"
              title="contact.support@instapix.app"
            >
              Email Us
            </a>
            <NavLink to={"/blog"}> Blog</NavLink>
          </div>
        </div>
        <div className="right">
          <span className="footer-title">Legal</span>
          <div className="footer-links">
            <NavLink to={"/privacy-policy"}> Privacy Policy</NavLink>
            <NavLink to={"/terms-and-conditions"}>
              Terms &amp; Conditions{" "}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footer-notice">
        <span>We have no affiliation with Meta or Instagram</span>
        <span>
          &copy; 2024 <NavLink to={"/"}>instapix.app</NavLink> - All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
