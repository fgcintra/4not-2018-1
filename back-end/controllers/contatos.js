var contatos = [
   {
      _id: 1,
      nome: 'Fulano da Silva',
      email: 'fulano@silva.org'
   },
   {
      _id: 2,
      nome: 'Beltrana Ferreira',
      email: 'beltrana@ferreira.com.br'
   },
   {
      _id: 3,
      nome: 'Sicrano de Souza',
      email: 'sicrano@souza.net'
   },
   {
      _id: 4,
      nome: 'João das Couves',
      email: 'joao@horta.com'
   },
   {
      _id: 5,
      nome: 'Maria da Bacia',
      email: 'maria@siderurgica.com.br'
   }
];

module.exports = function() {

   controller = {}; // Objeto vazio

   controller.listar = function(req, res) {
      res.json(contatos); // Envia o vetor inteiro
      res.end(); // Encerra a resposta
   }

   controller.obterUm = function(req, res) {
      var contatoId = req.params.id;

      // Filtra apenas o contato cujo _id coincide com
      // o valor do parâmetro
      var filtrado = contatos.filter(function(c) {
         return c._id == contatoId;
      });

      console.log(filtrado);

      // Se encontrado, o vetor filtrado terá 1 elemento
      if(filtrado.length == 1) {
         // Retorna o primeiro (e único) elemento do filtrado
         res.json(filtrado[0]);
      }
      // Não encontrou
      else {
         // HTTP 404: Não encontrado
         res.status(404).send('CONTATO NÃO ENCONTRADO');
      }

      res.end();

   }

   controller.novo = function(req, res) {
      var dados = req.body;

      console.log(dados); // Debug

      if(! dados._id) {
         // HTTP 400: Bad request
         res.status(400).send('O _id deve ser informado').end();
      }

      var novoContato = {};

      novoContato._id = dados._id;
      novoContato.nome = dados.nome;
      novoContato.email = dados.email;

      // Insere o novo contato no final do vetor de contatos
      contatos.push(novoContato);

      // HTTP 201: Created
      res.status(201).end();

   }

   return controller;

}