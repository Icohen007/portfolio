import React from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import App from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import GlobalStyle from '../components/_App/Global.style';
import ResponsiveNavBar from '../components/ResponsiveNavBar/ResponsiveNavBar';
import Layout from '../components/_App/Layout';
import ScrollProvider from '../hooks/ScrollProvider';
import ScrollButton from '../components/Shared/ScrollButton';
import * as gtag from '../lib/gtag';
import ErrorPage from './404';
import 'rodal/lib/rodal.css';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // whyDidYouRender(React, { trackAllPureComponents: true });
}

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

const handleRouteChange = (url) => {
  gtag.pageview(url);
};

export default class MyApp extends App {
  componentDidMount() {
    Router.events.on('routeChangeComplete', handleRouteChange);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', handleRouteChange);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <ScrollProvider>
            {Component !== ErrorPage && <ResponsiveNavBar />}
            <Component {...pageProps} />
            <ScrollButton />
          </ScrollProvider>
        </Layout>
      </ThemeProvider>
    );
  }
}
