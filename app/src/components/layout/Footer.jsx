import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <ul className="social-links">
            <li>
              <a href="/#" data-aos="fade-up" data-aos-delay="0">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="/#" data-aos="fade-up" data-aos-delay="100">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="/#" data-aos="fade-up" data-aos-delay="200">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="/#" data-aos="fade-up" data-aos-delay="400">
                <i className="fa fa-pinterest" />
              </a>
            </li>
            <li>
              <a href="/#" data-aos="fade-up" data-aos-delay="500">
                <i className="fa fa-envelope" />
              </a>
            </li>
          </ul>
          <p className="copyright">
            © 2018 example.com
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
