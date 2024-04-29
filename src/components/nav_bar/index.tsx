import React, { useState } from 'react';
import ts from '../../locales/en-US/translation.json';

let translation = ts.translation;

const NavBar: React.FC = () => {
  const [isNavBarScroll, setNavbarScroll] = useState<boolean>(false);

  const changeNavBackgroundColor = () => {
    if (window.screenY > 100) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  const resizeLogoOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
                        shrinkOn: number = 5,
                        headerEl: any = document.getElementById('header');
    
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  window.addEventListener('scroll', resizeLogoOnScroll);
  window.addEventListener('scroll', changeNavBackgroundColor);

  return (
    <div className="navbar-container navbar-margin" id="header">
      <nav className={
        isNavBarScroll
          ? "navbar fixed-top active navbar-expand-lg navbar-light navbar-background"
          : "navbar fixed-top navbar-expand-lg navbar-light navbar-background"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/assets/ms_club_logo.png" alt="ms-club-logo" className="navbar-logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav m-auto mb-lg-0" />
            <ul className="navbar-nav d-flex me-2 navbar-items">
              <li className="nav-item">
                <a className="nav-link" href="/">{translation.label["navbar-home"]}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{translation.label["navbar-about"]}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">{translation.label["navbar-events"]}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/board">{translation.label["navbar-board"]}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blogs">{translation.label["navbar-blogs"]}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">{translation.label["navbar-contact-us"]}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;