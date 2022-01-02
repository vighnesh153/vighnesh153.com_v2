/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import Anchor from './Anchor';
import config from 'config';

const SocialLinksBanner = (): JSX.Element => {
  return (
    <ul className="side social-links-banner left">
      {config.socialLinks.map(({ title, url, icon }) => (
        <li key={title} className="social-link">
          <Anchor
            href={url}
            openInNewTab
            aria-label={title}
            className="focus-dashed-outline"
          >
            {icon}
          </Anchor>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinksBanner;
