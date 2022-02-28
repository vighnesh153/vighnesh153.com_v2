/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import splImageUrl from 'static/spl.png';
import tsxPlaygroundImageUrl from 'static/tsxPlayground.png';
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
    id: 'tsx-playground',
    heading: 'React & Typescript playground',
    imageUrl: tsxPlaygroundImageUrl,
    description: (
      <>
        An interactive, browser-based, coding environment which supports
        importing any NPM module (which works on browsers) from the NPM
        registry. You can use this to test out any React and/or Typescript
        snippet directly in the browser without having to create a test project.
        Run your code safely and securely in your browser, without having to
        worry about anything, because your code never leaves your browser.
      </>
    ),
    technologies: ['React', 'Typescript', 'ESBuild', 'Vercel'],
    links: {
      github: '//github.com/vighnesh153/tsx-playground',
      demo: '//tsx.vighnesh153.com',
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
