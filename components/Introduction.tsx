/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import config from 'config';

const Introduction = (): JSX.Element => {
  return (
    <section className="introduction">
      <h2 hidden>Introduction</h2>
      <p className="hi">Hi, my name is</p>
      <p className="name">{config.myName}.</p>
      <p className="build-things">{config.shortSummary}</p>
      <p className="description">{config.summary}</p>
      <a href="#contact" className="contact awesome-link focus-dashed-outline">
        Get In Touch
      </a>
    </section>
  );
};

export default Introduction;
