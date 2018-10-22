import Document, { Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
  static async getInitialProps (ctx) {
    return await Document.getInitialProps(ctx)
  }

  render () {
    return (
      <html>
        <Head>
            <link rel="shortcut icon" href="favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/icon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/icon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/icon/favicon-16x16.png"/>
            <link rel="manifest" href="/assets/icon/site.webmanifest"/>
            <link href="/assets/vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="/assets/fonts/family.css" rel="stylesheet"/>
            <link href="/assets/vendors/owl/css/owl.carousel.min.css" rel="stylesheet"/>
            <link href="/assets/vendors/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet"/>
            <link href="/assets/css/adonis.css" rel="stylesheet"/>
            <link href="/assets/css/responsive.css" rel="stylesheet"/>

            <script src="/assets/vendors/jquery/jquery.min.js"></script>
            <script src="/assets/vendors/bootstrap/js/popper.min.js"></script>
            <script src="/assets/vendors/bootstrap/js/bootstrap.min.js"></script>
            <script src="/assets/vendors/imagesloaded/imagesloaded.pkgd.min.js"></script>
            <script src="/assets/vendors/jplayer/jquery.jplayer.min.js"></script>
            <script src="/assets/vendors/jplayer/jplayer.playlist.js"></script>
            <script src="/assets/vendors/owl/js/owl.carousel.min.js"></script>
            <script src="/assets/vendors/anime/anime.min.js"></script>
            <script src="/assets/vendors/perfect-scrollbar/js/perfect-scrollbar.min.js"></script>
            <script src="/assets/vendors/masonry/masonry.pkgd.min.js"></script>
            <script src="/assets/vendors/history/jquery.history.js"></script>
            <script src="/assets/js/bootstrap-hover-menu.js"></script>
            <script src="/assets/js/dropdown-menu.js"></script>
            <script src="/assets/js/bootstrap-hover-menu.js"></script>
            <script src="/assets/js/player.js"></script>
            <script src="/assets/js/viewport.js"></script>
            <script src="/assets/js/effects.js"></script>
            <script src="/assets/js/dropdown-menu.js"></script>
            <script src="/assets/js/app.js"></script>
            <script src="/assets/vendors/jwplayer/jwplayer.js"></script>
            <script src="/assets/vendors/jwplayer/jwplayer-key.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}