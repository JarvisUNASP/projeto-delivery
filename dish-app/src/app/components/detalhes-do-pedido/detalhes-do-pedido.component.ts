import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface Pagamento {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-detalhes-do-pedido',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule],
  templateUrl: './detalhes-do-pedido.component.html',
  styleUrls: ['./detalhes-do-pedido.component.css']
})
export class DetalhesDoPedidoComponent {
  selectedValue: string = '';
  pagamentos: Pagamento[] = [
    { value: 'Pix-0', viewValue: 'Pix' },
    { value: 'cartao-de-débito-1', viewValue: 'Cartão de Débito' },
    { value: 'cartao-de-crédito-2', viewValue: 'Cartão de Crédito' },
  ];

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  openSnackBar() {
    const snackBarRef = this.snackBar.open('Pedido realizado com sucesso', 'OK', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['Customizar_final'],
    });

    // Redireciona para a tela "rastreamento" após clicar em "OK" no SnackBar
    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(['/rastreamento']);
    });
  }
}
