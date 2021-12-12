import Document, { Html, Head, Main, NextScript } from 'next/document';

const MyDocument: React.FC = () => (
  <Html>
    <Head>
      <title>Vighnesh Raut | Javascript Ninja</title>
      <meta
        name="description"
        content="Vighnesh's personal space where he posts stuff about himself. View his different profiles, skills and projects there or find a way to contact him."
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
