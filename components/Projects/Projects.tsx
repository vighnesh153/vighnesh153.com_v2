/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import FeaturedProjects from './FeaturedProjects';
import OtherNoteworthyProjects from './OtherNoteworthyProjects';

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="home-section projects">
      <FeaturedProjects />
      <OtherNoteworthyProjects />
    </section>
  );
};

export default Projects;
