const express = require('express')
const app = express()
const port = 5000
const port2 = 5000
const port3 = 5000


app.get('/', (req, res) => {
  res.send('Hello Artur!')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
