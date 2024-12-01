import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { DishService, Dish } from '../../services/dish.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-page-bowl',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule, RouterModule, CommonModule],
  templateUrl: './page-bowl.component.html',
  styleUrl: './page-bowl.component.css'
})
export class PageBowlComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private router: Router, private dishService: DishService, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes(): void {
    this.dishService.getDishes().subscribe(data => {
      this.dishes = data;
    });
  }

  addToCart(dishId: number|undefined): void {
    if(dishId) this.cartService.createItem(dishId).subscribe(data => {
      this.router.navigate(['/carrinho']);
    });
  }
}
