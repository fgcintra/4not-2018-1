import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/produto');
  }

}
