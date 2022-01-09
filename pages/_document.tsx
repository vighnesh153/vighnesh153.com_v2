import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument: React.FC = () => (
  <Html lang="en">
    <Head>
      <meta
        name="description"
        content="Vighnesh's personal space where he talks about himself. View his different profiles, skills and projects there or find a way to contact him."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
