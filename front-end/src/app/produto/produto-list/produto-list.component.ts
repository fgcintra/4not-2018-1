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
  constructor(private ps: ProdutoService) { }

  ngOnInit() {
    this.ps.listar().subscribe(
      dados => this.produtos = dados, // this.fmtData(dados), // Callback se der certo
      erro => console.error(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.ps.excluir(id).subscribe(
        () => {
          alert('Produto excluído com sucesso.');
          this.ngOnInit(); // Atualiza a tabela
        },
        erro => {
          alert('Não foi possível excluir este produto.');
          console.error(erro);
        }
      );
    }
  }

}
