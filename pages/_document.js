import Document, { Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
  static async getInitialProps (ctx) {
    return await Document.getInitialProps(ctx)
  }

  render () {
    return (
      <html>
        <Head>
            <link href="/static/assets/vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700" rel="stylesheet"/>
            <link href="/static/assets/vendors/owl/css/owl.carousel.min.css" rel="stylesheet"/>
            <link href="/static/assets/vendors/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet"/>
            <link href="/static/assets/css/adonis.css" rel="stylesheet"/>
            <link href="/static/assets/css/responsive.css" rel="stylesheet"/>

            <script defer={true} src="/static/assets/vendors/jquery/jquery.min.js"></script>
            <script defer={true} src="/static/assets/vendors/bootstrap/js/popper.min.js"></script>
            <script defer={true} src="/static/assets/vendors/bootstrap/js/bootstrap.min.js"></script>
            <script defer={true} src="/static/assets/vendors/imagesloaded/imagesloaded.pkgd.min.js"></script>
            <script defer={true} src="/static/assets/vendors/jplayer/jquery.jplayer.min.js"></script>
            <script defer={true} src="/static/assets/vendors/jplayer/jplayer.playlist.js"></script>
            <script defer={true} src="/static/assets/vendors/owl/js/owl.carousel.min.js"></script>
            <script defer={true} src="/static/assets/vendors/anime/anime.min.js"></script>
            <script defer={true} src="/static/assets/vendors/perfect-scrollbar/js/perfect-scrollbar.min.js"></script>
            <script defer={true} src="/static/assets/vendors/masonry/masonry.pkgd.min.js"></script>
            <script defer={true} src="/static/assets/vendors/history/jquery.history.js"></script>
            <script defer={true} src="/static/assets/js/bootstrap-hover-menu.js"></script>
            <script defer={true} src="/static/assets/js/dropdown-menu.js"></script>
            
            <script defer={true} src="/static/assets/js/bootstrap-hover-menu.js"></script>
            <script defer={true} src="/static/assets/js/player.js"></script>
            <script defer={true} src="/static/assets/js/viewport.js"></script>
            <script defer={true} src="/static/assets/js/effects.js"></script>
            <script defer={true} src="/static/assets/js/dropdown-menu.js"></script>
            <script defer={true} src="/static/assets/js/app.js"></script>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    )
  }
}