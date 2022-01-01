/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import config from 'config';
import Anchor from './Anchor';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
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
        className="last-updated-on inline-link"
      >
        Last updated on: {new Date().toDateString()}
      </Anchor>
    </footer>
  );
};

export default Footer;
