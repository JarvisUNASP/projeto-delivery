import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OrderService, Order } from '../../services/order.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-cozinha',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './tela-cozinha.component.html',
  styleUrls: ['./tela-cozinha.component.css']
})
export class TelaCozinhaComponent implements OnInit {
  constructor(private router: Router, private orderService: OrderService){}

  // Armazena os tempos restantes em segundos
  temposRestantes: number[] = [5 * 60, 7 * 60, 9 * 60]; // 5, 7 e 9 minutos
  pedidos: Order[] = [];

  ngOnInit() {
    this.iniciarContagemRegressiva();
    this.listarPedidos();
  }

  iniciarContagemRegressiva() {
    setInterval(() => {
      for (let i = 0; i < this.temposRestantes.length; i++) {
        if (this.temposRestantes[i] > 0) {
          this.temposRestantes[i]--; // Decrementa o tempo
        }
      }
    }, 1000); // Atualiza a cada 1 segundo
  }

  formatarTempo(segundos: number): string {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  }

  listarPedidos() {
    this.orderService.getOrders().subscribe(data => {
      this.pedidos = data;
    });
  }

  finalizarPedido(id: number|undefined) {
    if (id) this.orderService.assignOrder(id).subscribe(data => {
      this.router.navigate(['/tela-motoboy1']);
    });
  }
}
