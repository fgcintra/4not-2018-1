import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService, Produto } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
  providers: [ProdutoService]
})
export class ProdutoFormComponent implements OnInit {

  public produto: Produto = new Produto();

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private ps: ProdutoService
  ) { }

  ngOnInit() {
    // Verifica os parâmetros da url
    this.ar.params.subscribe(
      params => {
        // Se existir o parâmetro id
        if (params.id) {
          this.ps.obterUm(params.id).subscribe(
            (dados: Produto) => this.produto = dados,
            erro => console.error(erro)
          );
        }
      }
    );
  }

  enviar(form) {
    //
  }

}
