import type { NextPage } from 'next';
import Head from 'next/head';

import NavBar from 'components/NavBar';
import Introduction from 'components/Introduction';
import About from 'components/About';
import Experience from 'components/Experience';
import Projects from 'components/Projects';
import ContactMe from 'components/ContactMe';
import Footer from 'components/Footer';
import SocialLinksBanner from 'components/SocialLinksBanner';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Vighnesh Raut</title>
      </Head>

      <NavBar />
      <SocialLinksBanner />

      <main id="main" className="main">
        <Introduction />
        <About />
        <Experience />
        <Projects />
        <ContactMe />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
