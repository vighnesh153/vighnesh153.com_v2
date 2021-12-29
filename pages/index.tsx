import type { NextPage } from 'next';
import Head from 'next/head';

import Anchor from 'components/Anchor';
import NavBar from 'components/NavBar';
import Introduction from 'components/Introduction';
import About from 'components/About';
import Experience from 'components/Experience';
import Projects from 'components/Projects';

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
        <Projects />

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
