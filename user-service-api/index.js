let express = require('express')
let app = express()
let port = 4000
app.get('/', (req, res) => {
  // return res.send('Dockerizing NodeExpress, Yooo')
  return res.json([{
    name: 'Bob',
    email: 'blog@gmail.com'
  }])
})
app.listen(port, () =>
  console.log(`Dockerized NodeExpress Listing On Port ${port}`)
)