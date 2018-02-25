/*****************************************
  _   _
 | \ | | __ ___   ____ _ _ __ _ __ __ _
 |  \| |/ _` \ \ / / _` | '__| '__/ _` |
 | |\  | (_| |\ V / (_| | |  | | | (_| |
 |_| \_|\__,_| \_/ \__,_|_|  |_|  \__,_|
******************************************/

const express = require('express');
const server = express();

const Navarra = require('./server/Navarra');
require('dotenv').config();

// Initialize the Game class with port number
const game = new Navarra(9000);

// Start the game server.
game.start();

// Start the Express server
server.use('/', express.static(__dirname + '/'));
server.listen(7777);
