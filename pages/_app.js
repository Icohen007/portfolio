import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/_App/Global.style';
import Layout from '../components/_App/Layout';

const theme = {
  primary: '#fff',
  secondary: '#333',
  font: {
    white: '#f6f5f3',
    orange: '#fca92e',
  },
  bg: {
    white: '#f9f8fd',
    black: '#222',
    orange: '#fca92e',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
