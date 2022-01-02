/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import Anchor from './Anchor';
import config from 'config';

const EmailAddressBanner = (): JSX.Element => {
  return (
    <div className="side email-address-banner right">
      <Anchor
        href={`mailto:${config.emailAddress}`}
        openInNewTab
        className="focus-dashed-outline"
      >
        {config.emailAddress}
      </Anchor>
    </div>
  );
};

export default EmailAddressBanner;
