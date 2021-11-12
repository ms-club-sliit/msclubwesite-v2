import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="/">
                  <img src="/assets/ms_club_logo.png" className="img-fluid" width="150px" alt="logo" />
                </a>
              </div>
              <div className="footer-text">
                <p>A volunteer-driven student community aiming to bridge the skill gap between an Undergraduate and an Industry Professional.</p>
                <div className="row social-media-row mb-3">
                  <div className="col-lg-1 col-md-1 col-sm-1 social-media-col">
                    <a href="https://www.facebook.com/msclubsliit" rel="noreferrer" target="_blank">
                      <i className="bi bi-facebook social-media-icons text-white" />
                    </a>
                  </div>
                  <div className="col-lg-1 col-md-1 col-sm-1 social-media-col">
                    <a href="https://www.linkedin.com/company/msclubsliit" rel="noreferrer" target="_blank">
                      <i className="bi bi-linkedin social-media-icons text-white" />
                    </a>
                  </div>
                  <div className="col-lg-1 col-md-1 col-sm-1 social-media-col">
                    <a href="https://www.instagram.com/msclub.sliit" rel="noreferrer" target="_blank">
                      <i className="bi bi-instagram social-media-icons text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/">Code of Conduct</a>
                </li>
                <li>
                  <a href="/">Brand Assets</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>Get the latest updates and information regarding MS Club of SLIIT right to your inbox!</p>
              </div>
              <div className="subscribe-email-section">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button type="submit">
                    <i className="fa fa-envelope" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 text-center">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2021, All Right Reserved&nbsp;
                <a href="/">MS Club of SLIIT</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;