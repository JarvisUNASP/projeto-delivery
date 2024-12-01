import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CartService, Item } from '../../services/cart.service';


@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule, RouterModule, CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  itens: Item[] = [];
  isCartEmpty = true;

  constructor(private dialog: MatDialog, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadItens();
  }

  loadItens(): void {
    this.cartService.getCart().subscribe(data => {
      this.itens = data;
      this.isCartEmpty = data.length == 0 ? true : false;
    });
  }

  removeItem(id: number|undefined): void {
    if(id) this.cartService.deleteItem(id).subscribe(data => {
      this.loadItens();
    });
  }

}
