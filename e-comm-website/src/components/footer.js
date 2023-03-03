import React from 'react';
import githubIcon from '../images/githubWhite.png';

const Footer = () => {
  return (
    <div className="github-link">
      Copyright © 2023 dom-io
      <a
        className="icon-link"
        href="https://github.com/dom-io"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="" style={{ width: '20px' }} />
      </a>
    </div>
  );
};

export default Footer;
