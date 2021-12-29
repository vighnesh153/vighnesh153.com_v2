/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import config from 'config';

const Introduction = (): JSX.Element => {
  return (
    <section className="introduction">
      <h2 hidden>Introduction</h2>
      <p className="hi t-600">Hi, my name is</p>
      <p className="name t-1300">{config.myName}.</p>
      <p className="build-things t-1300">{config.shortSummary}</p>
      <p className="description t-600">{config.summary}</p>
      <a href="#contact" className="contact awesome-link t-600">
        Get In Touch
      </a>
    </section>
  );
};

export default Introduction;
