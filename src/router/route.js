const express = require('express');
const router = express.Router();
const cryptoController = require("../controller/cryptoController")


router.get('/cryptoCoin',cryptoController.getStatus)







module.exports =router;