import type { NextPage } from 'next';
import Head from 'next/head';

import Anchor from 'components/Anchor';
import NavBar from 'components/NavBar';
import Introduction from 'components/Introduction';
import About from 'components/About';
import Experience from 'components/Experience';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Vighnesh Raut</title>
      </Head>

      <NavBar />

      <main id="main" className="main">
        <Introduction />
        <About />
        <Experience />

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
