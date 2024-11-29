// src/app/components/dish-list/dish-list.component.ts

import { Component, OnInit } from '@angular/core';
import { DishService, Dish } from '../../services/dish.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; // Se você for usar botões
import { MatIconModule } from '@angular/material/icon'; // Se você for usar ícones

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule, // Adicionar MatTableModule
    MatButtonModule, // Adicionar MatButtonModule para os botões
    MatIconModule // Adicionar MatIconModule para ícones (opcional)
  ]
})
export class DishListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'actions']; // Colunas da tabela
  dishes: Dish[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes() {
    this.dishService.getDishes().subscribe((data: Dish[]) => {
      this.dishes = data;
    });
  }

  deleteDish(id: number) {
    this.dishService.deleteDish(id).subscribe(() => {
      this.loadDishes();
    });
  }
}
