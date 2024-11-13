import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-rastreamento',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './rastreamento.component.html',
  styleUrl: './rastreamento.component.css'
})
export class RastreamentoComponent {

}