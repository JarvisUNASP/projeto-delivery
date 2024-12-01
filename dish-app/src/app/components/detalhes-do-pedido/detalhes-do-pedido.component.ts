import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientService, Client } from '../../services/client.service';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';

interface Pagamento {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-detalhes-do-pedido',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule, CommonModule],
  templateUrl: './detalhes-do-pedido.component.html',
  styleUrls: ['./detalhes-do-pedido.component.css']
})
export class DetalhesDoPedidoComponent {
  // selectedValue: string = '';
  // pagamentos: Pagamento[] = [
  //   { value: 'Pix-0', viewValue: 'Pix' },
  //   { value: 'cartao-de-débito-1', viewValue: 'Cartão de Débito' },
  //   { value: 'cartao-de-crédito-2', viewValue: 'Cartão de Crédito' },
  // ];
  cliente: Client = {
    nome: '',
    endereco: '',
    telefone: ''
  }

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private clientService: ClientService,
    private orderService: OrderService
  ) {}

  submitOrder() {
    this.clientService.createClient(this.cliente).subscribe(data => {
      if(data.id) this.orderService.createOrder(data.id).subscribe( data => {
        this.router.navigate(['/rastreamento']);
    });
    });
  }

  // openSnackBar() {
  //   const snackBarRef = this.snackBar.open('Pedido realizado com sucesso', 'OK', {
  //     duration: 10000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //     panelClass: ['Customizar_final'],
  //   });

  //   // Redireciona para a tela "rastreamento" após clicar em "OK" no SnackBar
  //   snackBarRef.onAction().subscribe(() => {
  //   });
  // }
}
