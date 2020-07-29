import Head from 'next/head';
import HeadContent from './HeadContent';
import ResponsiveNavBar from '../ResponsiveNavBar/ResponsiveNavBar';

function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
        <title>Itamar Cohen</title>
      </Head>
      <ResponsiveNavBar />
      {children}
    </>
  );
}

export default Layout;