const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 4096

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/', (req, res) => {
    const actualPage = '/Home'
    app.render(req, res, actualPage)
  })

  server.get('/detail', (req, res) => {
    const actualPage = '/Detail'
    app.render(req, res, actualPage)
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