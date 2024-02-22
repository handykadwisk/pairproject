const express = require('express')
const app = express()
const port = 4141
//default dari app
const routes = require('./routes/index')

//dilemapar ke routes
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))

app.use('/',routes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
