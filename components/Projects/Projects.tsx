/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import config from 'config';

import Anchor from 'components/Anchor';
import FeaturedProjects from './FeaturedProjects';

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="home-section projects">
      <FeaturedProjects />
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
