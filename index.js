const express = require('express')
const app = express()
const port = 5000


app.post('/', (req, res) => {
  res.send('Hello Andrei!')
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
  
