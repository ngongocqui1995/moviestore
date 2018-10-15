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
                <meta charset="UTF-8"/>
                <title>Adonis Demo-01 | Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>
                <link rel="shortcut icon" href="favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/icon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/static/assets/icon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/static/assets/icon/favicon-16x16.png"/>
                <link rel="manifest" href="/static/assets/icon/site.webmanifest"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Component {...pageProps} />
        </Container>
    )
  }
}