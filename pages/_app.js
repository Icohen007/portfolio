import App from 'next/app';
import GlobalStyle from '../components/_App/Global.style';
import Layout from '../components/_App/Layout';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
