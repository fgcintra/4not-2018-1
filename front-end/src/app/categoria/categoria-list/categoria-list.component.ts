import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css'],
  providers: [CategoriaService]
})
export class CategoriaListComponent implements OnInit {

  public categorias = {};

  constructor(private cs: CategoriaService) { }

  ngOnInit() {
    this.cs.listar().subscribe(
      dados => this.categorias = dados,
      erro => console.error(erro)
    );
  }

}
