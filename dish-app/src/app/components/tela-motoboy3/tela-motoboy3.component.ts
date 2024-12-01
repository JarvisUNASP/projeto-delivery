import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MotoboyService } from '../../services/motoboy.service';
import { Client } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-motoboy3',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tela-motoboy3.component.html',
  styleUrl: './tela-motoboy3.component.css'
})
export class TelaMotoboy3Component implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private motoboyService: MotoboyService 
  ) {}
  motoboyId: number = 0;
  pedidoId: number = 0;
  cliente: Client = {
    nome: "",
    endereco: "",
    telefone: ""
  };

  popup = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.motoboyId = parseInt(params['id']);
    });

    this.motoboyService.getOrderId(this.motoboyId).subscribe(data => {
      this.pedidoId = data;

      this.motoboyService.getOrderInfo(this.pedidoId).subscribe(data => {
        this.cliente = data;
      });
    });

  }

  finishRun() {
    this.motoboyService.finishOrder(this.motoboyId, this.pedidoId).subscribe( data => {
      this.router.navigate(['/tela-motoboy5'], { queryParams: {
        id: this.motoboyId,
        pedidoId: this.pedidoId
      } })
    });
  }

  openPopup() {
    this.popup = true;
  }

  closePopup() {
    this.popup = false;
  }
}

