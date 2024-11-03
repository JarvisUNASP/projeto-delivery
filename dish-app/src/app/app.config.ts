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
import { TelaMotoboy1Component } from './components/tela-motoboy1/tela-motoboy1.component';
import { TelaMotoboy2Component } from './components/tela-motoboy2/tela-motoboy2.component';
import { TelaMotoboy3Component } from './components/tela-motoboy3/tela-motoboy3.component';
import { TelaMotoboy4Component } from './components/tela-motoboy4/tela-motoboy4.component';
import { TelaMotoboy5Component } from './components/tela-motoboy5/tela-motoboy5.component';


const routes: Routes = [
  { path: '', component: DishListComponent },
  { path: 'add-dish', component: DishFormComponent },
  { path: 'edit-dish/:id', component: DishFormComponent },
  { path: 'page-bowl', component: PageBowlComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'detalhes-do-pedido', component: DetalhesDoPedidoComponent},
  { path: 'tela-motoboy1', component: TelaMotoboy1Component},
  { path: 'tela-motoboy2', component: TelaMotoboy2Component},
  { path: 'tela-motoboy3', component: TelaMotoboy3Component},
  { path: 'tela-motoboy4', component: TelaMotoboy4Component},
  { path: 'tela-motoboy5', component: TelaMotoboy5Component},
  
  

];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
