import Head from 'next/head';
import HeadContent from './HeadContent';

function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <title>Itamar Cohen</title>
      </Head>
      {children}
    </>
  );
}

export default Layout;
