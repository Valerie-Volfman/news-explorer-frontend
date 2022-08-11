/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Footer.css";
import github from "../../images/github.svg";
import facebook from "../../images/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__links-block">
        <ul className="footer__links">
          <li className="footer__link" href="/">
            Home
          </li>
          <li>Practicum by Yandex</li>
        </ul>
        <ul className="footer__icons">
          <li href="https://github.com/">
            <img alt="github-icon" src={github} />
          </li>
          <li className="footer__icon" href="https://ru-ru.facebook.com/">
            <img alt="github-icon" src={facebook} />
          </li>
        </ul>
      </nav>
      <p className="footer__text">&copy; 2021 Supersite, Powered by News API</p>
    </footer>
  );
}

export default Footer;
