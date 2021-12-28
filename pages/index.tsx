import type { NextPage } from 'next';
import Head from 'next/head';

import Anchor from 'components/Anchor';
import NavBar from 'components/NavBar';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Vighnesh Raut</title>
      </Head>

      <NavBar />

      <main id="main" className="main">
        <section className="introduction">
          <h2 hidden>Introduction</h2>
          <p>Hi, my name is</p>
          <p>Vighnesh Raut</p>
          <p>I build things for fun.</p>
          <p>
            I am a Computer Science grad with a sweet tooth for mathematics.
            Love to manipulate graphics using code and build end-to-end systems.
          </p>
          <a href="#contact">Get In Touch</a>
        </section>

        <section id="about">
          <h2 className="heading">
            <span className="number">01.</span> About me
          </h2>
          <p>
            Hello. My name is Vighnesh and I enjoy creating things that live on
            the web. My interest in frontend development started a few years
            back when I first learnt about HTML, CSS and Javascript. Since then,
            I have been building teeny-tiny projects for the web for fun.
            <br />
            <br />
            Fast-forward to today, and I have had the privilege to work for{' '}
            <a href="https://amazon.com" target="_blank" rel="noreferrer">
              a huge corporation
            </a>
            ,{' '}
            <a href="https://smarter.codes/" target="_blank" rel="noreferrer">
              an AI startup
            </a>{' '}
            and{' '}
            <a href="https://www.tavisca.com/" target="_blank" rel="noreferrer">
              a loyalty rewards company
            </a>
            .
            <br />
            <br />
            My main focus these days is building is building accessible,
            inclusive products and digital experiences at{' '}
            <a href="https://amazon.com" target="_blank" rel="noreferrer">
              Amazon
            </a>{' '}
            for the Appstore org.
            <br />
            <br />
            Here are a few technologies I have been working with recently:
            <br />
            <br />
            <ul>
              <li>Javascript (ES6+)</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Nodejs</li>
            </ul>
          </p>
        </section>

        <section id="experience">
          <h2 className="heading">
            <span className="number">02.</span> Where I have worked
          </h2>
          <nav role="tablist">
            <ul>
              <li role="tab">
                <a href="#experience" aria-controls="experience-at-amazon">
                  Amazon
                </a>
              </li>
              <li role="tab">
                <a
                  href="#experience"
                  aria-controls="experience-at-smarter-codes"
                >
                  Smarter Codes
                </a>
              </li>
              <li role="tab">
                <a href="#experience" aria-controls="experience-at-tavisca">
                  Tavisca
                </a>
              </li>
            </ul>
          </nav>
          <section aria-live="polite" role="region">
            <article
              id="experience-at-amazon"
              role="tabpanel"
              className="experience-item-body"
            >
              <h3>
                Web Dev Engineer <a href="#">@ Amazon</a>
              </h3>
              <h4>September 2020 - Present</h4>
              <ul className="responsibilities">
                <li>
                  Working on the revamp of App Submission flow on{' '}
                  <a
                    href="//developer.amazon.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    developer.amazon.com
                  </a>{' '}
                  where developers can submit their mobile or web applications
                  to be available on Amazon Appstore
                </li>
                <li>
                  Working on a internal tool which is a one stop for everything
                  related to the Day 1 culture of Amazon. The tool is accessible
                  to all the Amazon employees and is currently handling over
                  2000 tps
                </li>
                <li>
                  Write modern, performant, maintainable code for a diverse
                  array of other Amazon internal projects
                </li>
                <li>
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as Javascript,
                  Typescript, React, NextJS, Java, Spring, AWS
                </li>
                <li>
                  Communicate with multi-disciplinary teams of engineers,
                  designers, program managers, and stakeholders on a daily basis
                </li>
              </ul>
            </article>
            <article
              id="experience-at-smarter-codes"
              role="tabpanel"
              className="experience-item-body"
            >
              <h3>
                Full Stack Engineer <a href="#">@ Smarter Codes</a>
              </h3>
              <h4>July 2020 - September 2020</h4>
              <ul className="responsibilities">
                <li>
                  Implemented many of the{' '}
                  <Anchor href="//rocket.chat" openInNewTab>
                    Rocket Chat
                  </Anchor>{' '}
                  features for the{' '}
                  <Anchor href="//mattermost.com" openInNewTab>
                    Mattermost
                  </Anchor>{' '}
                  chat platform
                </li>
                <li>
                  Lot of other utility plugins for the{' '}
                  <Anchor href="//mattermost.com" openInNewTab>
                    Mattermost
                  </Anchor>{' '}
                  chat platform
                </li>
                <li>Worked on amazing tech stack: ReactJS, Golang and AWS</li>
              </ul>
            </article>
            <article
              id="experience-at-tavisca"
              role="tabpanel"
              className="experience-item-body"
            >
              <h3>
                Software Engineer <a href="#">@ Tavisca</a>
              </h3>
              <h4>June 2019 - January 2020</h4>
              <ul className="responsibilities">
                <li>
                  Under went Software Engineering training for 6 months and
                  learnt a lot about Software engineering design principles,
                  clean code best practices, etc.
                </li>
                <li>
                  Built a Road-trip Itinerary Planner (proof-of-concept) project
                  where I applied all the things I learnt during my training
                  phase
                </li>
                <li>
                  Worked on fixing a bunch of bugs/issues on the production
                  application
                </li>
              </ul>
            </article>
          </section>
        </section>

        <section id="projects">
          <section id="featured-projects">
            <h2 className="heading">
              <span className="number">03.</span> Some things I have built
            </h2>

            <article id="spl">
              <img src="//google.com" alt="" />
              <p>Featured Project</p>
              <h3>
                <Anchor href="//spl.vighnesh153.com" openInNewTab>
                  Simple Programming Language (SPL)
                </Anchor>
              </h3>
              <p>
                A small programming language built with the intention of helping
                people start with their programming journey.
              </p>
              <ul className="technologies">
                <li>Typescript</li>
                <li>AWS S3 & Cloudfront</li>
                <li>Github Actions</li>
              </ul>
              <ul className="links">
                <li>
                  <Anchor href="//github.com/vighnesh153/spl" openInNewTab>
                    Octocat Icon
                  </Anchor>
                </li>
                <li>
                  <Anchor href="//spl.vighnesh153.com" openInNewTab>
                    External link icon
                  </Anchor>
                </li>
              </ul>
            </article>

            <article id="use-global-state">
              <img src="//google.com" alt="" />
              <p>Featured Project</p>
              <h3>
                <Anchor
                  href="//www.npmjs.com/package/@vighnesh153/use-global-state"
                  openInNewTab
                >
                  React useGlobalState library
                </Anchor>
              </h3>
              <p>
                A lightweight library that provides a React hook for having a
                piece of global state. It is similar to the useState hook from
                the React library but with the only addition that this hook{' '}
                <strong className="highlight">persists</strong> the state.
              </p>
              <ul className="technologies">
                <li>React</li>
                <li>Typescript</li>
                <li>NPM</li>
                <li>Github Actions</li>
              </ul>
              <ul className="links">
                <li>
                  <Anchor
                    href="//github.com/vighnesh153/react-use-global-state"
                    openInNewTab
                  >
                    Octocat Icon
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    href="//www.npmjs.com/package/@vighnesh153/use-global-state"
                    openInNewTab
                  >
                    External link icon
                  </Anchor>
                </li>
              </ul>
            </article>

            <article id="canvas-illustrations">
              <img src="//google.com" alt="" />
              <p>Featured Project</p>
              <h3>
                <Anchor href="//graphics.vighnesh153.com" openInNewTab>
                  Javascript Canvas API illustrations
                </Anchor>
              </h3>
              <p>
                Manipulation of the graphics using the HTML Canvas API in
                Javascript.
              </p>
              <ul className="technologies">
                <li>React</li>
                <li>Typescript</li>
                <li>AWS S3 & Cloudfront</li>
                <li>Github Actions</li>
              </ul>
              <ul className="links">
                <li>
                  <Anchor
                    href="//github.com/vighnesh153/canvas-api-illustrations"
                    openInNewTab
                  >
                    Octocat Icon
                  </Anchor>
                </li>
                <li>
                  <Anchor href="//graphics.vighnesh153.com" openInNewTab>
                    External link icon
                  </Anchor>
                </li>
              </ul>
            </article>
          </section>

          <section id="other-noteworthy-projects">
            <h3>Other Noteworthy Projects</h3>

            <article id="personal-blog">
              <img src="//google.com" alt="" className="card-icon" />
              <ul className="links">
                <li>
                  <Anchor href="#" openInNewTab>
                    Octocat Icon
                  </Anchor>
                </li>
                <li>
                  <Anchor href="//blogs.vighnesh153.com" openInNewTab>
                    External link icon
                  </Anchor>
                </li>
              </ul>
              <h4>Personal Blog</h4>
              <p>A place where I write about anything, mostly Technology</p>
              <ul className="technologies">
                <li>React</li>
                <li>Typescript</li>
                <li>Vercel</li>
                <li>NextJS</li>
              </ul>
            </article>

            <article id="react-toolkit">
              <img src="//google.com" alt="" className="card-icon" />
              <ul className="links">
                <li>
                  <Anchor
                    href="//github.com/vighnesh153/react-toolkit"
                    openInNewTab
                  >
                    Octocat Icon
                  </Anchor>
                </li>
                <li>
                  <Anchor href="//react-toolkit.vighnesh153.com/" openInNewTab>
                    External link icon
                  </Anchor>
                </li>
              </ul>
              <h4>React Toolkit</h4>
              <p>
                A simple component library for my projects. It also has a bunch
                of common hooks that I use and other utility stuff
              </p>
              <ul className="technologies">
                <li>React</li>
                <li>Typescript</li>
                <li>Storybook</li>
                <li>NPM</li>
                <li>AWS S3 & Cloudfront</li>
              </ul>
            </article>
          </section>
        </section>

        <section id="contact">
          <h2 className="heading">
            <span className="number">04.</span> About me
          </h2>
          <p className="get-in-touch">Get In Touch</p>
          <p>
            My inbox is always open, whether you have a question or just to say
            hi. I will try my best to get back to you.
          </p>
        </section>
      </main>

      <footer className="footer">
        <Anchor href="//github.com/vighnesh153/vighnesh153.com_v2" openInNewTab>
          Built by Vighnesh Raut{' '}
          <span className="last-updated-on">
            Last updated on: {new Date().toDateString()}
          </span>
        </Anchor>
      </footer>
    </div>
  );
};

export default Home;
