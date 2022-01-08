/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';
import Image from 'next/image';

import Octocat from 'icons/Octocat';
import ExternalLink from 'icons/ExternalLink';

import config from 'config';

import Anchor from 'components/Anchor';

const FeaturedProjects = (): JSX.Element => {
  return (
    <section id="featured-projects" className="featured-projects">
      <h2 className="heading">
        <span className="number">03.</span> Some things I have built
      </h2>

      <ul className="featured-projects-list">
        {config.projects.featured.map(
          ({ id, technologies, description, heading, imageUrl, links }) => (
            <li id={id} key={id} className="featured-project">
              <div className="featured-project-content">
                <p className="featured-project-subheading">Featured Project</p>
                <h3 className="featured-project-heading">
                  <Anchor
                    href={links.demo}
                    openInNewTab
                    className="link focus-dashed-outline"
                  >
                    {heading}
                  </Anchor>
                </h3>
                <p className="featured-project-description">{description}</p>
                <ul className="featured-project-technologies">
                  {technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <ul className="project-links featured-project-links">
                  <li className="project-icon">
                    <Anchor
                      href={links.github}
                      openInNewTab
                      className="focus-dashed-outline"
                    >
                      <Octocat />
                    </Anchor>
                  </li>
                  <li className="project-icon">
                    <Anchor
                      href={links.demo}
                      openInNewTab
                      className="focus-dashed-outline"
                    >
                      <ExternalLink />
                    </Anchor>
                  </li>
                </ul>
              </div>
              <div className="featured-project-image">
                <Anchor
                  href={links.demo}
                  openInNewTab
                  className="focus-dashed-outline"
                >
                  <Image
                    src={imageUrl}
                    alt={heading}
                    layout="fill"
                    placeholder="blur"
                  />
                </Anchor>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default FeaturedProjects;
