import type { AppProps } from 'next/app';

import 'styles/globals.scss';
import 'styles/Home.scss';
import 'styles/components/NavBar.scss';
import 'styles/components/Introduction.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
