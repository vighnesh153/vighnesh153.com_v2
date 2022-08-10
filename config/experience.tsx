/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import Anchor from 'components/Anchor';
import { companyUrls } from './base';

const appstoreDeveloperConsole = (
  <Anchor
    href="//developer.amazon.com/apps-and-games"
    openInNewTab
    className="inline-link"
  >
    Appstore Developer Console
  </Anchor>
);

const getTimeTillToday = (from: Date, toDate: Date = new Date()) => {
  const totalMonths =
    (toDate.getFullYear() - from.getFullYear()) * 12 +
    (toDate.getMonth() - from.getMonth() + 1);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return [
    years > 0 ? `${years} yr` : '',
    months > 0 ? `${months} mos` : '',
  ].join(' ');
};

const experience = [
  {
    company: 'Google',
    companyUrl: companyUrls.Google,
    totalDuration: <>{getTimeTillToday(new Date('2022-07-14'))}</>,
    positions: [
      {
        title: 'Software Engineer 2',
        duration: (
          <>July 2022 - Present · {getTimeTillToday(new Date('2022-07-14'))}</>
        ),
      },
    ],
    responsibilities: [
      <>Building the DevTools to help AndroidTV App developers to develop their apps</>,
      <>Google App Verification System for validating common integration between GoogleTV and developer's apps</>,
    ],
  },
  {
    company: 'Amazon',
    companyUrl: companyUrls.Amazon,
    totalDuration: (
      <>{getTimeTillToday(new Date('2020-09-28'), new Date('2022-07-14'))}</>
    ),
    positions: [
      {
        title: 'Front End Engineer 1',
        duration: (
          <>
            June 2022 - July 2022 ·{' '}
            {getTimeTillToday(new Date('2022-06-01'), new Date('2022-07-14'))}
          </>
        ),
      },
      {
        title: 'Web Development Engineer 1',
        duration: (
          <>
            September 2020 - May 2022 ·{' '}
            {getTimeTillToday(new Date('2020-09-28'), new Date('2022-05-31'))}
          </>
        ),
      },
    ],
    responsibilities: [
      <>
        Working on the revamp of App Submission flow on{' '}
        {appstoreDeveloperConsole} where developers can submit their mobile or
        web applications to be available on Amazon Appstore
      </>,
      <>
        Worked on an internal tool which is a one stop solution for everything
        related to the{' '}
        <Anchor
          href="//www.amazon.jobs/en/landing_pages/about-amazon"
          openInNewTab
          className="inline-link"
        >
          Day 1 culture
        </Anchor>{' '}
        of Amazon. The tool is accessible to all the Amazon employees
      </>,
      <>
        Working on an internal React Components Library which will be used by
        entire Appstore to build standard and accessible UI for all the web
        pages on {appstoreDeveloperConsole}
      </>,
      <>
        Worked on an internal tool which was used by Appstore certifiers, to
        certify/flag all the apps that were submitted on{' '}
        {appstoreDeveloperConsole} based on internal policies
      </>,
      'Writing modern, performant, maintainable code for a diverse array of other Amazon external and internal projects',
      <>
        Working with a variety of different languages, platforms, frameworks,
        and content management systems such as{' '}
        <Anchor
          href="//developer.mozilla.org/en-US/docs/Web/JavaScript"
          openInNewTab
          className="inline-link"
        >
          Javascript
        </Anchor>
        ,{' '}
        <Anchor
          href="//www.typescriptlang.org/"
          openInNewTab
          className="inline-link"
        >
          Typescript
        </Anchor>
        ,{' '}
        <Anchor href="//reactjs.org/" openInNewTab className="inline-link">
          ReactJS
        </Anchor>
        ,{' '}
        <Anchor href="//nextjs.org/" openInNewTab className="inline-link">
          NextJS
        </Anchor>
        ,{' '}
        <Anchor href="//aws.amazon.com" openInNewTab className="inline-link">
          AWS
        </Anchor>
        , internal-AWS, Java, Spring, JSP
      </>,
      'Communicating with multi-disciplinary teams of engineers, designers, program managers, and stakeholders on a daily basis',
    ],
  },
  {
    company: 'Smarter Codes',
    companyUrl: companyUrls.SmarterCodes,
    totalDuration: (
      <>{getTimeTillToday(new Date('2020-07-06'), new Date('2020-09-25'))}</>
    ),
    positions: [
      {
        title: 'Full Stack Engineer',
        duration: (
          <>
            July 2020 - September 2020 ·{' '}
            {getTimeTillToday(new Date('2020-07-06'), new Date('2020-09-25'))}
          </>
        ),
      },
    ],
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
    totalDuration: (
      <>{getTimeTillToday(new Date('2019-07-15'), new Date('2020-01-25'))}</>
    ),
    positions: [
      {
        title: 'Software Engineer',
        duration: (
          <>
            July 2019 - January 2020 ·{' '}
            {getTimeTillToday(new Date('2019-07-15'), new Date('2020-01-25'))}
          </>
        ),
      },
    ],
    responsibilities: [
      'Under went Software Engineering training for 6 months and learnt a lot about Software engineering design principles, clean code best practices, etc.',
      'Built a Road-trip Itinerary Planner (proof-of-concept) project where I applied all the things I learnt during my training phase',
      'Worked on fixing a bunch of bugs/issues on the production application',
    ],
  },
];

export default experience;
