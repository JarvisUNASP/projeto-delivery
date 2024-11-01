import { Routes } from '@angular/router';
import { PageBowlComponent } from './components/page-bowl/page-bowl.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { DetalhesDoPedidoComponent } from './components/detalhes-do-pedido/detalhes-do-pedido.component';

export const routes: Routes = [
    {path: '', redirectTo: 'page-bowl', pathMatch: 'full' },
    {path: 'page-bowl', component: PageBowlComponent },
    {path: 'carrinho', component: CarrinhoComponent},
    {path: 'detalhes-do-pedido', component: DetalhesDoPedidoComponent},
];