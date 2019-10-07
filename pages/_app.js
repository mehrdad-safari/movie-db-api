import React from "react";
import App, { Container } from "next/app";
import Footer from '../components/elements/Footer/Footer'

export default class MovieApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }



  render() {
    const { Component, pageProps,query } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
        <Footer />
      </Container>
      
    );
  }
}
  
  
