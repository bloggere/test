const express = require('express')
const app = express()
const port = 5000

const port0 = 5000

console.log('from Artur')

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
  
