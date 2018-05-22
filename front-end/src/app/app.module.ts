import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    CategoriaListComponent,
    ProdutoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
