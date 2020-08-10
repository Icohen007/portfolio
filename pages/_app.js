import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/_App/Global.style';
import Layout from '../components/_App/Layout';
import 'rodal/lib/rodal.css';

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
  link: {
    blue: '#3B68B5',
    green: '#37bc9b',
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
