/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import config from 'config';

const ContactMe = (): JSX.Element => {
  return (
    <section id="contact" className="contact-me">
      <p className="contact-me-subtitle">
        <span className="number">04.</span> {"What's next?"}
      </p>
      <h2 className="contact-me-heading">Get In Touch</h2>
      <p className="contact-me-description">
        My inbox is always open, whether you have a question or just to say hi.
        I will try my best to get back to you.
      </p>
      <a
        href={`mailto:${config.emailAddress}`}
        className="contact-me-email awesome-link focus-dashed-outline"
      >
        Say Hello
      </a>
    </section>
  );
};

export default ContactMe;
