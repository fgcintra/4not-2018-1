import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Classe espelho do model do back-end
export class Produto {
  public _id: String;
  public descricao: String;
  public marca?: String;
  public cod_barras?: String; // ? = valor opcional
  public preco: Number;
  public data_validade?: Date;
  public categoria: String;   // ObjectId mapeia para String
}

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/produto');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/produto/' + id);
  }

  salvar(p: Produto) {
    if (p._id) {
      return this.http.post('http://localhost:3000/produto/' + p._id, p);
    }
  }

}
