var Categoria = require('../models/categoria')();

module.exports = function() {

   controller = {};

   controller.listar = function(req, res) {
      Categoria.find().exec().then(
         // Callback se der certo
         function (categorias) {
            res.json(categorias).end();
         },
         // Callback se der errado
         function (erro) {
            console.error(erro);
            // HTTP 500: Internal server error
            res.status(500).json(erro).end();
         }
      )
   }
   
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