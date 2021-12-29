/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';
import Anchor from '../components/Anchor';

const uiConstants = {
  navLinks: [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#experience' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ],
  resume: {
    name: 'Resume',
    url: 'https://bit.ly/vighnesh153-resume',
  },
};

const companyUrls = {
  Amazon: 'https://amazon.com',
  SmarterCodes: 'https://smarter.codes',
  Tavisca: 'https://tavisca.com',
};

const config = {
  ...uiConstants,
  myName: 'Vighnesh Raut',
  shortSummary: 'I build things, mostly for the web.',
  summary:
    'I am a Software Engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products for different causes.',
  aboutMe: (
    <>
      Hello. My name is Vighnesh and I enjoy creating things that live on the
      web. My interest in frontend development started a few years back when I
      first learnt about HTML, CSS and Javascript. Since then, I have been
      building teeny-tiny projects for the web for fun.
      <br />
      <br />
      Fast-forward to today, and I have had the privilege to work for{' '}
      <Anchor href={companyUrls.Amazon} openInNewTab className="inline-link">
        a huge corporation
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
      My main focus these days is building is building accessible, inclusive
      products and digital experiences at{' '}
      <Anchor href={companyUrls.Amazon} openInNewTab className="inline-link">
        Amazon
      </Anchor>{' '}
      for the Appstore org.
    </>
  ),
  skills: ['Javascript (ES6+)', 'Typescript', 'React', 'Nodejs'],
  experience: [
    {
      company: 'Amazon',
      companyUrl: companyUrls.Amazon,
      position: 'Web Development Engineer',
      duration: 'September 2020 - Present',
      responsibilities: [
        <>
          Working on the revamp of App Submission flow on{' '}
          <Anchor
            href="//developer.amazon.com"
            openInNewTab
            className="inline-link"
          >
            developer.amazon.com
          </Anchor>{' '}
          where developers can submit their mobile or web applications to be
          available on Amazon Appstore
        </>,
        'Working on a internal tool which is a one stop for everything related to the Day 1 culture of Amazon. The tool is accessible to all the Amazon employees and is currently handling over 2000 tps',
        'Write modern, performant, maintainable code for a diverse array of other Amazon internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as Javascript, Typescript, React, NextJS, Java, Spring, AWS',
        'Communicate with multi-disciplinary teams of engineers, designers, program managers, and stakeholders on a daily basis',
      ],
    },
    {
      company: 'Smarter Codes',
      companyUrl: companyUrls.SmarterCodes,
      position: 'Full Stack Engineer',
      duration: 'July 2020 - September 2020',
      responsibilities: [
        <>
          Implemented many of the{' '}
          <Anchor href="//rocket.chat" openInNewTab className="inline-link">
            Rocket Chat
          </Anchor>{' '}
          features for the{' '}
          <Anchor href="//mattermost.com" openInNewTab className="inline-link">
            Mattermost
          </Anchor>{' '}
          chat platform
        </>,
        <>
          Lot of other utility plugins for the{' '}
          <Anchor href="//mattermost.com" openInNewTab className="inline-link">
            Mattermost
          </Anchor>{' '}
          chat platform
        </>,
        'Worked on amazing tech stack: ReactJS, Golang and AWS',
      ],
    },
    {
      company: 'Tavisca',
      companyUrl: companyUrls.Tavisca,
      position: 'Software Engineer',
      duration: 'June 2019 - January 2020',
      responsibilities: [
        'Under went Software Engineering training for 6 months and learnt a lot about Software engineering design principles, clean code best practices, etc.',
        'Built a Road-trip Itinerary Planner (proof-of-concept) project where I applied all the things I learnt during my training phase',
        'Worked on fixing a bunch of bugs/issues on the production application',
      ],
    },
  ],
  projects: {
    featured: [
      {
        id: 'spl',
        heading: 'Simple Programming Language (SPL)',
        imageUrl: 'https://google.com', // TODO
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
        imageUrl: 'https://google.com', // TODO
        description: (
          <>
            A lightweight library that provides a React hook for having a piece
            of global state. It is similar to the useState hook from the React
            library but with the only addition that this hook{' '}
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
        imageUrl: 'https://google.com', // TODO
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
    ],
    otherNoteWorthy: [
      {
        id: 'personal-blog',
        heading: 'Personal Blog',
        description: 'A place where I write about anything, mostly Technology',
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
    ],
  },
};

export default config;
