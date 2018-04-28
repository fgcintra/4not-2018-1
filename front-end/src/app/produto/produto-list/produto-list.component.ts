import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
  providers: [ProdutoService]
})
export class ProdutoListComponent implements OnInit {

  public produtos: any = {};
  constructor(private ps: ProdutoService) { }

  ngOnInit() {
    this.ps.listar().subscribe(
      function(dados) { // Callback se der certo
        return this.produtos = dados;
      },
      function(erro) {
        console.log(erro);
      }
    );
  }

}
