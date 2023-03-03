import React from 'react';
import Header from '../header';
import Footer from '../footer';
import githubIcon from '../../images/githubBlack.png';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-wrapper">
        <a
          className="icon-contact-link"
          href="https://github.com/dom-io"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="" style={{ width: '90px' }} />
        </a>
      </div>
      <p className="location">123 Franklin Street, San Francisco</p>
      <Footer />
    </div>
  );
};

export default Contact;
