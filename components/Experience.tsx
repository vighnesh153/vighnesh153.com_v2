/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React, { useState } from 'react';

import Anchor from './Anchor';
import config from 'config';
import clsx from 'clsx';

const slugifyCompanyName = (companyName: string) =>
  `experience-at-${companyName.toLowerCase().replace(/ /g, '-')}`;

const Experience = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(
    slugifyCompanyName(config.experience[0].company)
  );

  return (
    <section id="experience" className="home-section experience">
      <h2 className="heading">
        <span className="number">02.</span> Where I have worked
      </h2>
      <section className="tabs-container">
        <nav role="tablist" className="experience-navigation">
          {config.experience.map(({ company }) => {
            const slug = slugifyCompanyName(company);
            const isActive = slug === activeTab;
            return (
              <button
                key={company}
                role="tab"
                aria-controls={slug}
                aria-selected={isActive}
                className={clsx({ active: isActive })}
                onClick={() => setActiveTab(slug)}
              >
                {company}
              </button>
            );
          })}
        </nav>
        <section
          aria-live="polite"
          role="region"
          className="individual-experiences-container"
        >
          {config.experience.map(
            ({ company, companyUrl, position, duration, responsibilities }) => {
              const slug = slugifyCompanyName(company);
              return (
                <section
                  key={slug}
                  id={slug}
                  role="tabpanel"
                  aria-hidden={slug !== activeTab}
                  className={clsx('experience-item-body', {
                    hide: slug !== activeTab,
                  })}
                >
                  <h3 className="position">
                    {position}{' '}
                    <Anchor
                      href={companyUrl}
                      openInNewTab
                      className="company inline-link"
                    >
                      @ {company}
                    </Anchor>
                  </h3>
                  <h4 className="duration">{duration}</h4>
                  <ul className="responsibilities">
                    {responsibilities.map((responsibility, index) => (
                      <li key={index} className="common-list-item">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            }
          )}
        </section>
      </section>
    </section>
  );
};

export default Experience;
