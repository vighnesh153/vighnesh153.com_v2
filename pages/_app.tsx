import type { AppProps } from 'next/app';

// Global styles
import 'styles/globals.scss';

// Home page styles
import 'styles/Home.scss';

// Navigation bar styles
import 'styles/components/NavBar.scss';

// Introduction component styles
import 'styles/components/Introduction.scss';

// About component styles
import 'styles/components/About.scss';

// Experience component styles
import 'styles/components/Experience.scss';

// Projects component styles
import 'styles/components/Projects.scss';
import 'styles/components/FeaturedProjects.scss';
import 'styles/components/OtherNoteworthyProjects.scss';

// ContactMe component styles
import 'styles/components/ContactMe.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
