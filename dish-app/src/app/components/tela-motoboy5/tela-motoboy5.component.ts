import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MotoboyService } from '../../services/motoboy.service';
import { Client } from '../../services/client.service';

@Component({
  selector: 'app-tela-motoboy5',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tela-motoboy5.component.html',
  styleUrl: './tela-motoboy5.component.css'
})
export class TelaMotoboy5Component implements OnInit {

  constructor(private motoboyService: MotoboyService, private activatedRoute: ActivatedRoute){}

  motoboyId = 0;
  pedidoId = 0;
  cliente: Client = {
    nome: '',
    endereco: '',
    telefone: ''
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.motoboyId = parseInt(params['id']);
      this.pedidoId = parseInt(params['pedidoId']);
    });

    this.motoboyService.getOrderInfo(this.pedidoId).subscribe(data => {
      this.cliente = data;
    })
  }
}
