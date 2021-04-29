const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const IP = "127.0.0.1";
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/*', (req, res) => {res.sendFile(path.join(__dirname))});

app.listen(port, IP, () => {
  console.log(`Server running at http://${IP}:${port}/`)});