var mongoose = require('mongoose');

module.exports = function () {

   var schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true
      },
      cod_barras: {
         type: String
      },
      marca: {
         type: String
      },
      preco: {
         type: Number,
         required: true
      },
      data_validade: {
         type: Date
      },
      categoria: {
         type: mongoose.SchemaTypes.ObjectId,
         ref: 'Categoria',
         required: true
      }
   });

   return mongoose.model('Produto', schema, 'produtos');

}