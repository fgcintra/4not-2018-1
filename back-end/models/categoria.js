var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true
      },
      perecivel: {
         type: Boolean,
         required: true,
         default: false // Valor padrão para o atributo
      }
   });

   return mongoose.model('Categoria', schema, 'categorias');

}