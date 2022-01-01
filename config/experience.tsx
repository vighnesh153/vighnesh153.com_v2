/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import Anchor from 'components/Anchor';
import { companyUrls } from './base';

const experience = [
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
];

export default experience;
