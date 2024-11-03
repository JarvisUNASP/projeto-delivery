import { Routes } from '@angular/router';
import { PageBowlComponent } from './components/page-bowl/page-bowl.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { DetalhesDoPedidoComponent } from './components/detalhes-do-pedido/detalhes-do-pedido.component';
import { TelaMotoboy1Component } from './components/tela-motoboy1/tela-motoboy1.component';
import { TelaMotoboy2Component } from './components/tela-motoboy2/tela-motoboy2.component';
import { TelaMotoboy3Component } from './components/tela-motoboy3/tela-motoboy3.component';
import { TelaMotoboy4Component } from './components/tela-motoboy4/tela-motoboy4.component';
import { TelaMotoboy5Component } from './components/tela-motoboy5/tela-motoboy5.component';


export const routes: Routes = [
    {path: '', redirectTo: 'page-bowl', pathMatch: 'full' },
    {path: 'page-bowl', component: PageBowlComponent },
    {path: 'carrinho', component: CarrinhoComponent},
    {path: 'detalhes-do-pedido', component: DetalhesDoPedidoComponent},
    {path: 'tela-motoboy1', component: TelaMotoboy1Component},
    { path: 'tela-motoboy2', component: TelaMotoboy2Component},
    { path: 'tela-motoboy3', component: TelaMotoboy3Component},
    { path: 'tela-motoboy4', component: TelaMotoboy4Component},
    { path: 'tela-motoboy5', component: TelaMotoboy5Component},
];