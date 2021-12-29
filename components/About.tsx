/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import config from 'config';

const About = (): JSX.Element => {
  return (
    <section id="about" className="home-section about">
      <h2 className="heading">
        <span className="number">01.</span> About me
      </h2>
      <p>{config.aboutMe}</p>
      <br />
      <br />
      <p>Here are a few technologies I have been working with recently:</p>
      <ul className="skills-list">
        {config.skills.map((skill) => (
          <li key={skill} className="common-list-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
