import type { NextPage } from 'next';
import Head from 'next/head';

import Anchor from 'components/Anchor';
import NavBar from 'components/NavBar';
import Introduction from 'components/Introduction';
import About from 'components/About';
import Experience from 'components/Experience';
import Projects from 'components/Projects';
import ContactMe from 'components/ContactMe';

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
        <ContactMe />
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
