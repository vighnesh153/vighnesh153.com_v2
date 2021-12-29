/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';
import Image from 'next/image';

import config from 'config';
import Anchor from './Anchor';

const Projects = (): JSX.Element => {
  return (
    <section id="projects">
      <section id="featured-projects">
        <h2 className="heading">
          <span className="number">03.</span> Some things I have built
        </h2>

        {config.projects.featured.map(
          ({ id, technologies, description, heading, imageUrl, links }) => (
            <section id={id} key={id}>
              {/*<Image src={imageUrl} alt="" />*/}
              <p>Featured Project</p>
              <h3>
                <Anchor href={links.demo} openInNewTab>
                  {heading}
                </Anchor>
              </h3>
              <p>{description}</p>
              <ul className="technologies">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <ul className="links">
                <li>
                  <Anchor href={links.github} openInNewTab>
                    Octocat Icon
                  </Anchor>
                </li>
                <li>
                  <Anchor href={links.demo} openInNewTab>
                    External link icon
                  </Anchor>
                </li>
              </ul>
            </section>
          )
        )}
      </section>

      <section id="other-noteworthy-projects">
        <h3>Other Noteworthy Projects</h3>

        {config.projects.otherNoteWorthy.map(
          ({ id, technologies, description, heading, links }) => (
            <section id={id} key={id}>
              <ul className="links">
                {links.github && (
                  <li>
                    <Anchor href={links.github} openInNewTab>
                      Octocat Icon
                    </Anchor>
                  </li>
                )}
                {links.demo && (
                  <li>
                    <Anchor href={links.demo} openInNewTab>
                      External link icon
                    </Anchor>
                  </li>
                )}
              </ul>
              <h4>{heading}</h4>
              <p>{description}</p>
              <ul className="technologies">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
          )
        )}
      </section>
    </section>
  );
};

export default Projects;
