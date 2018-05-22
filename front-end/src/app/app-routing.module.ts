import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';

const routes: Routes = [
  {
    path: 'produto',
    component: ProdutoListComponent
  },
  {
    path: 'produto/:id',
    component: ProdutoFormComponent
  },
  {
    path: 'categoria',
    component: CategoriaListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
