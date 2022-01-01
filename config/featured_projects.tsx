/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import splImageUrl from 'static/spl.png';
import useGlobalStateImageUrl from 'static/useGlobalState.png';
import canvasIllustrationsImageUrl from 'static/canvas-illustrations.png';

const featuredProjects = [
  {
    id: 'spl',
    heading: 'Simple Programming Language (SPL)',
    imageUrl: splImageUrl,
    description:
      'A small programming language built with the intention of helping people start with their programming journey.',
    technologies: ['Typescript', 'AWS S3 & Cloudfront', 'Github Actions'],
    links: {
      github: '//github.com/vighnesh153/spl',
      demo: '//spl.vighnesh153.com',
    },
  },
  {
    id: 'use-global-state',
    heading: 'React useGlobalState library',
    imageUrl: useGlobalStateImageUrl,
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
    id: 'canvas-illustrations',
    heading: 'Javascript Canvas API illustrations',
    imageUrl: canvasIllustrationsImageUrl,
    description:
      'Manipulation of the graphics using the HTML Canvas API in Javascript.',
    technologies: [
      'React',
      'Typescript',
      'AWS S3 & Cloudfront',
      'Github Actions',
    ],
    links: {
      github: '//github.com/vighnesh153/canvas-api-illustrations',
      demo: '//graphics.vighnesh153.com',
    },
  },
];

export default featuredProjects;
