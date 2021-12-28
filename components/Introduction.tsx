/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

const Introduction = (): JSX.Element => {
  return (
    <section className="introduction">
      <h2 hidden>Introduction</h2>
      <p className="hi t-600">Hi, my name is</p>
      <p className="name t-1300">Vighnesh Raut.</p>
      <p className="build-things t-1300">I build things, mostly for the web.</p>
      <p className="description t-600">
        I am a Software Engineer specializing in building exceptional digital
        experiences. Currently, I’m focused on building accessible,
        human-centered products for different causes.
      </p>
      <a href="#contact" className="contact awesome-link t-600">
        Get In Touch
      </a>
    </section>
  );
};

export default Introduction;
