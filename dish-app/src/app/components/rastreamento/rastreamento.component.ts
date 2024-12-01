import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Order, OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rastreamento',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule, MatDialogModule, CommonModule],
  templateUrl: './rastreamento.component.html',
  styleUrl: './rastreamento.component.css'
})
export class RastreamentoComponent implements OnInit {
  orders: Order[] = []

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    })
  }
}