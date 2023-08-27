const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

//server
const server = express();

//config server
server.use(cors());
server.use(express.json({limit: '25mb'}));

//start server
const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});