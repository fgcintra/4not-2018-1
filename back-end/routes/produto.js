var express = require('express');
var controller = require('../controllers/produto');
var router = express.Router();

router.get('/', controller().listar);

router.get('/:id', controller().obterUm);

router.put('/', controller().novo);

router.post('/:id', controller().alterar);

router.delete('/:id', controller().excluir);

module.exports = router;
