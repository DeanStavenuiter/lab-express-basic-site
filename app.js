const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

//connects to a public folder
app.use(express.static("public"))

//request and response
//creating routes 
app.get('/', (req, res) => {
    console.log(req.url)
  res.sendFile(__dirname + '/views/index.html')
})

//creating routes, the name after the slash has nothing to do with the route can be different names
app.get('/works', (req, res) => {
    console.log(req.url)
    res.sendFile(__dirname + '/views/works.html')
})

//creating routes, the name after the slash has nothing to do with the route can be different names
app.get('/about', (req, res) => {
    console.log(req.url)
    res.sendFile(__dirname + '/views/about.html')
  })

//creating routes, the name after the slash has nothing to do with the route can be different names
  app.get('/photogallery', (req, res) => {
    console.log(req.url)
    res.sendFile(__dirname + '/views/photogallery.html')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})