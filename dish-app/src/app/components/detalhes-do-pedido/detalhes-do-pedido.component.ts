import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
interface Pagamento {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-detalhes-do-pedido',
  standalone: true,
  imports: [ MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule],
  templateUrl: './detalhes-do-pedido.component.html',
  styleUrl: './detalhes-do-pedido.component.css'
})
export class DetalhesDoPedidoComponent {
  selectedValue: string = '';
  selectedCar: string = '' ;

  pagamentos: Pagamento[] = [
    {value: 'Pix-0', viewValue: 'Pix'},
    {value: 'cartao-de-débito-1', viewValue: 'Cartão de Débito'},
    {value: 'cartao-de-crédito-2', viewValue: 'Cartão de Crédito'},
  ];

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('Pedido realizado com sucesso', 'OK', {
      duration: 100000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['Customizar_final'],
    });
  }
}
