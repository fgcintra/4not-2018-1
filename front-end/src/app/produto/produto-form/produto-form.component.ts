import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService, Produto } from '../produto.service';
import { CategoriaService } from '../../categoria/categoria.service';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
  providers: [ProdutoService, CategoriaService]
})
export class ProdutoFormComponent implements OnInit {

  public produto: Produto = new Produto();
  public categorias: any = [];

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private ps: ProdutoService,
    private cs: CategoriaService
  ) { }

  ngOnInit() {
    // Verifica os parâmetros da url
    this.ar.params.subscribe(
      params => {
        // Se existir o parâmetro id
        if (params.id) {
          this.ps.obterUm(params.id).subscribe(
            (dados: Produto) => {
              this.produto = dados;
              // Precisamos da data no formato yyyy-MM-dd. Basta pegar o início
              // da string de data que vem do MongoDB
              this.produto.data_validade = this.produto.data_validade.substring(0, 10);
            },
            erro => console.error(erro)
          );
        }
      }
    );

    this.cs.listar().subscribe(
      dados => this.categorias = dados,
      erro => console.error(erro)
    );

  }

  enviar(form) {
    // console.log(this.produto);

    this.ps.salvar(this.produto).subscribe(
      () => alert('Produto salvo com sucesso.'),
      erro => {
        alert('Ocorreu um erro:\n' + erro);
        console.error(erro);
      }
    );

  }

}

