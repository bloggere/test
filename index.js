const express = require('express')
const app = express()
const port = 5000
const port2 = 5000
const port3 = 5000


app.post('/', (req, res) => {

  res.send('Hello Andrei!')
  res.send('Hello Illya!')

})

app.delete('/', (req, res) => {
    res.send('Hello Lettt!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
