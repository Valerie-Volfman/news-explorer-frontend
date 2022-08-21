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
          <li>
            <a className="footer__link" href="/">
              Home
            </a>
          </li>
          <li>
            <a
            className="footer__link_yandex"
              rel="noreferrer"
              target="_blank"
              href="https://practicum.com/en-isr/?gclid=Cj0KCQjw3eeXBhD7ARIsAHjssr-7pMtZjdyH7yXG1aaKJxXzQhn-B2L7wfaM9fqZt5Q86NOzOZ9TJdAaAsxAEALw_wcB"
            >
              Practicum by Yandex
            </a>
          </li>
        </ul>
        <ul className="footer__icons">
          <li>
            <a rel="noreferrer" target="_blank" href="https://github.com/">
              <img alt="github-icon" src={github} />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              className="footer__icon"
              href="https://ru-ru.facebook.com/"
            >
              <img alt="github-icon" src={facebook} />
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__text">&copy; 2021 Supersite, Powered by News API</p>
    </footer>
  );
}

export default Footer;
