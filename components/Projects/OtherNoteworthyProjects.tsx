/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React, { useState } from 'react';

import config from 'config';

import Folder from 'icons/Folder';
import Octocat from 'icons/Octocat';
import ExternalLink from 'icons/ExternalLink';

import Anchor from 'components/Anchor';

const PROJECTS_COUNT_THRESHOLD = 6;
const noteworthyProjects = config.projects.otherNoteWorthy;

const OtherNoteworthyProjects = (): JSX.Element => {
  const [showingAll, setShowingAll] = useState(false);

  return (
    <section
      id="other-noteworthy-projects"
      className="other-noteworthy-projects"
    >
      <h3 className="other-noteworthy-projects-section-title">
        Other Noteworthy Projects
      </h3>

      <ul className="other-noteworthy-projects-list">
        {noteworthyProjects
          .slice(
            0,
            showingAll ? noteworthyProjects.length : PROJECTS_COUNT_THRESHOLD
          )
          .map(({ id, technologies, description, heading, links }) => (
            <li id={id} key={id} className="other-noteworthy-project">
              <div className="other-noteworthy-project-top-bar">
                <Folder
                  role="presentation"
                  className="other-noteworthy-project-top-bar-folder"
                />

                <ul className="other-noteworthy-project-links">
                  {links.github && (
                    <li className="other-noteworthy-project-link">
                      <Anchor
                        href={links.github}
                        openInNewTab
                        className="focus-dashed-outline"
                      >
                        <Octocat />
                      </Anchor>
                    </li>
                  )}
                  {links.demo && (
                    <li className="other-noteworthy-project-link">
                      <Anchor
                        href={links.demo}
                        openInNewTab
                        className="focus-dashed-outline"
                      >
                        <ExternalLink />
                      </Anchor>
                    </li>
                  )}
                </ul>
              </div>
              <h4 className="other-noteworthy-project-heading">
                <Anchor
                  href={links.demo}
                  openInNewTab
                  className="focus-dashed-outline"
                >
                  {heading}
                </Anchor>
              </h4>
              <p className="other-noteworthy-project-description">
                {description}
              </p>
              <ul className="other-noteworthy-project-technologies">
                {technologies.map((technology) => (
                  <li
                    key={technology}
                    className="other-noteworthy-project-technology"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>

      {noteworthyProjects.length > PROJECTS_COUNT_THRESHOLD && (
        <button
          className="show-more-btn regular-btn focus-dashed-outline"
          onClick={() => setShowingAll(!showingAll)}
        >
          Show {showingAll ? 'less' : 'more'}
        </button>
      )}
    </section>
  );
};

export default OtherNoteworthyProjects;
