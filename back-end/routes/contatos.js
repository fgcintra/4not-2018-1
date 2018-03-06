var express = require('express');
var controller = require('../controllers/contatos');
var router = express.Router();

router.get('/', controller().listar);

router.get('/:id', controller().obterUm);

module.exports = router;
