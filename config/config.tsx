/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import featuredProjects from './featured_projects';
import otherNoteworthyProjects from './other_noteworthy_projects';
import experience from './experience';
import aboutMe from './about_me';
import { shortSummary, summary } from './summary';
import { smallConstants } from './base';
import socialLinks from './social_links';

const config = {
  ...smallConstants,
  shortSummary,
  summary,
  aboutMe,
  experience,
  socialLinks,
  projects: {
    featured: featuredProjects,
    otherNoteWorthy: otherNoteworthyProjects,
  },
};

export default config;
