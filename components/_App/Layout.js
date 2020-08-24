import Head from 'next/head';
import HeadContent from './HeadContent';

function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
        <link href="https://fonts.googleapis.com/css?family=Inter|Roboto:400,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" media="only screen and (max-width: 768px)" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" media="print" onLoad="this.media='all';this.onload=null;" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" media="print" onLoad="this.media='all';this.onload=null;" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /></noscript>
        <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax" /></noscript>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" defer />
        <title>Itamar Cohen - Full Stack Web Developer</title>
      </Head>
      {children}
    </>
  );
}

export default Layout;
