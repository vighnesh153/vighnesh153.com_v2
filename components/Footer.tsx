/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import config from 'config';
import Anchor from './Anchor';

const Footer = (): JSX.Element => {
  return (
    <footer id="footer" className="footer">
      <ul className="footer-social-links only-below-768">
        {config.socialLinks.map(({ icon, url, title }) => (
          <li key={url} className="footer-social-link">
            <Anchor
              openInNewTab
              href={url}
              aria-label={title}
              className="focus-dashed-outline"
            >
              {icon}
            </Anchor>
          </li>
        ))}
      </ul>
      <span>
        Designed by{' '}
        <Anchor
          href={config.brittanyChiangWebsite}
          openInNewTab
          className="inline-link"
        >
          Brittany Chiang
        </Anchor>{' '}
        and built by{' '}
        <Anchor href="/" className="inline-link">
          Vighnesh Raut
        </Anchor>
        <br />
        <Anchor
          href={config.githubRepoUrl}
          className="view-on-github inline-link"
        >
          View on Github
        </Anchor>
      </span>
    </footer>
  );
};

export default Footer;
