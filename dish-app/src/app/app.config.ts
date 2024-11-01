// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { PageBowlComponent } from './components/page-bowl/page-bowl.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { DetalhesDoPedidoComponent } from './components/detalhes-do-pedido/detalhes-do-pedido.component';

const routes: Routes = [
  { path: '', component: DishListComponent },
  { path: 'add-dish', component: DishFormComponent },
  { path: 'edit-dish/:id', component: DishFormComponent },
  { path: 'page-bowl', component: PageBowlComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'detalhes-do-pedido', component: DetalhesDoPedidoComponent},
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
