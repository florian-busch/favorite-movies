const express = require('express');
const helmet = require('helmet');
const app = express();
const bodyparser = require('body-parser');

app.use(helmet());
app.use(express.static(__dirname));
app.use(bodyparser.json());

const IP = "127.0.0.1";
const port = process.env.PORT || 3000;

//for dev allow cors, also dbRouter-routes dont work without cors() 
const cors = require('cors')
app.use(cors())

//database routes
const dbRoutes = require('./routes/dbRouter')
app.use('/db', dbRoutes);

//tmdb routes
const tmdbRoutes = require('./routes/tmdbRoutes');
app.use('/tmdb', tmdbRoutes);

//start server
app.listen(port, IP, () => {
  console.log(`Server running at http://${IP}:${port}/`)});