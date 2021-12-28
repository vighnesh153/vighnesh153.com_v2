/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

const About = (): JSX.Element => {
  return (
    <section id="about" className="home-section about">
      <h2 className="heading">
        <span className="number">01.</span> About me
      </h2>
      <p>
        Hello. My name is Vighnesh and I enjoy creating things that live on the
        web. My interest in frontend development started a few years back when I
        first learnt about HTML, CSS and Javascript. Since then, I have been
        building teeny-tiny projects for the web for fun.
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
        My main focus these days is building is building accessible, inclusive
        products and digital experiences at{' '}
        <a href="https://amazon.com" target="_blank" rel="noreferrer">
          Amazon
        </a>{' '}
        for the Appstore org.
        <br />
        <br />
        Here are a few technologies I have been working with recently:
      </p>
      <ul className="skills-list">
        <li>Javascript (ES6+)</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Nodejs</li>
      </ul>
    </section>
  );
};

export default About;
