const express = require('express')
const app = express()
const port = 9000
const connectDB = require('./server/config/db');
var bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

//db connection
connectDB();

// Routes

const centerRoutes = require('./server/routes/web/center-route/center-route');
const residentRoutes = require('./server/routes/web/resident-route/resident-route');
const reservationRoutes = require('./server/routes/web/reservation/reservation-route');
const nurseRoutes = require('./server/routes/web/nurse-route/nurse-route')

app.use('/center', centerRoutes)
app.use('/resident', residentRoutes)
app.use('/reservation', reservationRoutes)
app.use('/nurse', nurseRoutes)


//
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})