import { Routes } from '@angular/router';
import { InicialClienteComponent } from './components/inicial-cliente/inicial-cliente.component'
import { PageBowlComponent } from './components/page-bowl/page-bowl.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { DetalhesDoPedidoComponent } from './components/detalhes-do-pedido/detalhes-do-pedido.component';
import { RastreamentoComponent } from './components/rastreamento/rastreamento.component';
import { TelaMotoboy1Component } from './components/tela-motoboy1/tela-motoboy1.component';
import { TelaMotoboy2Component } from './components/tela-motoboy2/tela-motoboy2.component';
import { TelaMotoboy3Component } from './components/tela-motoboy3/tela-motoboy3.component';
import { TelaMotoboy4Component } from './components/tela-motoboy4/tela-motoboy4.component';
import { TelaMotoboy5Component } from './components/tela-motoboy5/tela-motoboy5.component';
import { TelaCozinhaComponent } from './components/tela-cozinha/tela-cozinha.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { CriarPratosComponent } from './components/criar-pratos/criar-pratos.component';
import { DishCreateComponent } from './components/dish-form/dish-form.component';


export const routes: Routes = [
  { path: 'listar-pratos', component: DishListComponent },
  { path: 'criar-prato', component: DishCreateComponent},
  { path: 'editar-prato/:id', component: DishCreateComponent },
  { path: 'inicial-cliente', component: InicialClienteComponent},
  { path: 'page-bowl', component: PageBowlComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'detalhes-do-pedido', component: DetalhesDoPedidoComponent},
  { path: 'rastreamento', component: RastreamentoComponent},
  { path: 'tela-motoboy1', component: TelaMotoboy1Component},
  { path: 'tela-motoboy2', component: TelaMotoboy2Component},
  { path: 'tela-motoboy3', component: TelaMotoboy3Component},
  { path: 'tela-motoboy4', component: TelaMotoboy4Component},
  { path: 'tela-motoboy5', component: TelaMotoboy5Component},
  { path: 'tela-cozinha', component: TelaCozinhaComponent},
];