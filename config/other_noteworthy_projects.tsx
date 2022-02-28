/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

const otherNoteworthyProjects = [
  {
    id: 'use-global-state',
    heading: 'React useGlobalState library',
    description: (
      <>
        A lightweight library that provides a React hook for having a piece of
        global state. It is similar to the useState hook from the React library
        but with the only addition that this hook{' '}
        <strong className="highlight">persists</strong> the state.
      </>
    ),
    technologies: ['React', 'Typescript', 'NPM', 'Github Actions'],
    links: {
      github: '//github.com/vighnesh153/react-use-global-state',
      demo: '//www.npmjs.com/package/@vighnesh153/use-global-state',
    },
  },
  {
    id: 'personal-blog',
    heading: 'Personal Blog',
    description:
      'A place where I write about anything that I like, mostly Technology',
    technologies: ['React', 'Typescript', 'Vercel', 'NextJS'],
    links: {
      github: '',
      demo: '//blogs.vighnesh153.com',
    },
  },
  {
    id: 'react-toolkit',
    heading: 'React Toolkit',
    description:
      'A simple component library for my projects. It also has a bunch of common hooks that I use and other utility stuff',
    technologies: [
      'React',
      'Typescript',
      'Storybook',
      'NPM',
      'AWS S3 & Cloudfront',
    ],
    links: {
      github: '//github.com/vighnesh153/react-toolkit',
      demo: '//react-toolkit.vighnesh153.com',
    },
  },
];

export default otherNoteworthyProjects;
