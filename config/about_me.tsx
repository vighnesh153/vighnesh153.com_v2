/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import Anchor from 'components/Anchor';
import { companyUrls } from './base';

const aboutMe = (
  <>
    Hello. My name is Vighnesh and I enjoy creating things that live on the web.
    My interest in frontend development started a few years back when I first
    learnt about HTML, CSS and Javascript. Since then, I have been building
    teeny-tiny projects for the web for fun.
    <br />
    <br />
    Fast-forward to today, and I have had the privilege to work for{' '}
    <Anchor href={companyUrls.Google} openInNewTab className="inline-link">
      Google
    </Anchor>
    ,{' '}
    <Anchor href={companyUrls.Amazon} openInNewTab className="inline-link">
      Amazon
    </Anchor>
    ,{' '}
    <Anchor
      href={companyUrls.SmarterCodes}
      openInNewTab
      className="inline-link"
    >
      an AI startup
    </Anchor>{' '}
    and{' '}
    <Anchor href={companyUrls.Tavisca} openInNewTab className="inline-link">
      a loyalty rewards company
    </Anchor>
    .
    <br />
    <br />
    My Main focus these days is building the Android SDK for AndroidTV at{' '}
    <Anchor href={companyUrls.Google} openInNewTab className="inline-link">
      Google
    </Anchor>{' '}
    to aid the AndroidTV builders.
  </>
);

export default aboutMe;
