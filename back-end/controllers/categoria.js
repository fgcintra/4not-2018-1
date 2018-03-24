var Categoria = require('../models/categoria')();

module.exports = function() {

   controller = {};

   controller.novo = function(req, res) {

      var novo = new Categoria(req.body);

      novo.save(function(erro) {
         if(erro) {
            console.error(erro);
            res.status(500).json(erro).end();
         }
         else {
            res.status(201).end();
         }
      });

   }

   return controller;

}