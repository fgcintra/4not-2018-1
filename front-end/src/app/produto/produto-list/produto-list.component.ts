import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import * as moment from 'moment';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
  providers: [ProdutoService]
})
export class ProdutoListComponent implements OnInit {

  public produtos: any = {};
  public mmt = moment;
  constructor(private ps: ProdutoService) { }

  ngOnInit() {
    this.ps.listar().subscribe(
      dados => this.produtos = dados, // Callback se der certo
      erro => console.error(erro)
    );
  }

}
