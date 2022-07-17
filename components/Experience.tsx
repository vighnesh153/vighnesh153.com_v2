/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import Anchor from './Anchor';
import config from 'config';
import clsx from 'clsx';

const slugifyCompanyName = (companyName: string) =>
  `experience-at-${companyName.toLowerCase().replace(/ /g, '-')}`;

const Experience = (): JSX.Element => {
  return (
    <section id="experience" className="home-section experience">
      <h2 className="heading">
        <span className="number">02.</span> Where I have worked
      </h2>
      <section
        className="experiences-list"
        style={{ position: 'relative', height: 'max-content' }}
      >
        {config.experience.map(
          ({
            company,
            companyUrl,
            totalDuration,
            positions,
            responsibilities,
          }) => {
            const slug = slugifyCompanyName(company);
            return (
              <section
                key={slug}
                id={slug}
                role="tabpanel"
                style={{ padding: '2rem 1rem', marginBottom: 20 }}
              >
                <h3
                  style={{
                    fontSize: 'var(--t-700)',
                    color: 'hsl(var(--major-text-color))',
                  }}
                >
                  <Anchor
                    href={companyUrl}
                    openInNewTab
                    className="inline-link"
                    style={{ color: 'hsl(var(--color-secondary))' }}
                  >
                    Building @ {company}
                  </Anchor>
                </h3>
                {positions.length > 1 && (
                  <p
                    style={{
                      color: 'hsla(var(--major-text-color), 60%)',
                    }}
                  >
                    Full time · {totalDuration}
                  </p>
                )}
                <section
                  style={{
                    marginTop: 10,
                    marginBottom: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  {positions.map(({ title, duration }) => (
                    <section key={`${title}-${duration}`}>
                      <p
                        style={{
                          fontSize: 'var(--t-700)',
                          color: 'hsl(var(--major-text-color))',
                        }}
                      >
                        {title}
                      </p>
                      <p
                        style={{
                          color: 'hsla(var(--major-text-color), 60%)',
                        }}
                      >
                        {duration}
                      </p>
                    </section>
                  ))}
                </section>
                <ul
                  style={{
                    marginTop: '1rem',
                    fontSize: 'var(--t-600)',
                    color: 'hsla(var(--major-text-color), 60%)',
                    lineHeight: 1.3,
                    listStyle: 'none',
                  }}
                >
                  {responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="common-list-item"
                      style={{ marginTop: '0.5rem' }}
                    >
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
  );
};

export default Experience;
