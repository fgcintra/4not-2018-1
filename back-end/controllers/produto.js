var Produto = require('../models/produto')(/* construtor */);

module.exports = function() {

   controller = {};

   controller.listar = function(req, res) {
      Produto.find().populate('categoria').exec().then(
         // Callback se der certo
         function(produtos) {
            res.json(produtos).end();
         },
         // Callback se der errado
         function(erro) {
            console.error(erro);
            // HTTP 500: Internal server error
            res.status(500).json(erro).end();
         }
      )
   }

   controller.obterUm = function(req, res) {
      var idProduto = req.params.id;
      Produto.findById(idProduto).exec().then(
         function(produto) {
            // Produto não encontrado (a variável vem vazia)
            if(! produto) {
               res.status(404).end();
            }
            else {
               // OK, retornamos o produto encontrado
               res.json(produto).end();
            }
         },
         function (erro) {
            console.error(erro);
            // HTTP 500: Internal server error
            res.status(500).json(erro).end();
         }         
      )
   }

   controller.novo = function(req, res) {
      var novo = new Produto(req.body);

      novo.save(function(erro) {
         if(erro) {
            console.error(erro);
            res.status(500).end();
         }
         else {
            res.status(204).end();
         }
      });

   }

   controller.alterar = function(req, res) {
      var idProduto = req.params.id;

      if(idProduto) { // Foi psassado o id do produto
         Produto.findByIdAndUpdate(idProduto, req.body).exec().then(
            function(contato) {
               // HTTP 204: No content
               res.status(204).end();
            },
            function(erro) {
               console.error(erro);
               res.status(500).json(erro).end();
            }
         );
      }
      else {
         // HTTP 400: Bad request
         res.status(400).end();
      }
   }

   controller.excluir = function(req, res) {
      var idProduto = req.params.id;

      if(idProduto) {
         Produto.findByIdAndRemove(idProduto).exec().then(
            function(produto) {
               res.status(204).end();
            },
            function(erro) {
               console.error(erro);
               res.status(500).json(erro).end();
            }
         );
      }
      else {
         res.status(400).end();
      }
   }

   return controller;

}