import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return {pageProps}
      }
  render () {
    const {Component, pageProps} = this.props
    return (
        <Container>
            <Head>
                <title>Adonis Demo-01 | Home</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Component {...pageProps} />
        </Container>
    )
  }
}