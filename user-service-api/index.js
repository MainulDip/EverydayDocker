let express = require('express')
let app = express()
let port = 4000
app.get('/', (req, res) => res.send('Dockerizing NodeExpress, Yooo'))
app.listen(port, () =>
  console.log(`Dockerized NodeExpress Listing On Port ${port}`)
)