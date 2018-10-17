const express = require('express')
const next = require('next')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 4096

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(express.static(path.join(__dirname, 'public')));

  server.get('/', (req, res) => {
    const actualPage = '/Home'
    app.render(req, res, actualPage)
  })

  server.get('/cenima', (req, res) => {
    const actualPage = '/Cenima'
    app.render(req, res, actualPage)
  })

  server.get('/romance', (req, res) => {
    const actualPage = '/Romance'
    app.render(req, res, actualPage)
  })

  server.get('/anime', (req, res) => {
    const actualPage = '/Anime'
    app.render(req, res, actualPage)
  })

  server.get('/comedy', (req, res) => {
    const actualPage = '/Comedy'
    app.render(req, res, actualPage)
  })

  server.get('/news', (req, res) => {
    const actualPage = '/News'
    app.render(req, res, actualPage)
  })

  server.get('/detail/:metaKey', (req, res) => {
    const query = { 
      metaKey: req.params.metaKey,
      keyEpisodes: req.query.episodes
    }
    const actualPage = '/Detail'
    app.render(req, res, actualPage, query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })


  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on http://localhost:${port}`);
  })

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})