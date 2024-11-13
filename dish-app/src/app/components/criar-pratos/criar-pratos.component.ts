import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

export interface Pratos {
  ID: number;
  Nome: string;
  Descricao: string;
  Valor: number;
}

let ELEMENT_DATA: Pratos[] = [
  { ID: 1, Nome: 'Bowl 700ml', Descricao: 'Açaí no copo de 700ml. Com até 6 acompanhamentos.', Valor: 20.00 },
  { ID: 2, Nome: 'Bowl 500ml', Descricao: 'Açaí no copo de 500ml. Com até 4 acompanhamentos.', Valor: 15.00 },
  { ID: 3, Nome: 'Bowl 300ml', Descricao: 'Açaí no copo de 300ml. Com até 3 acompanhamentos.', Valor: 9.00}
];

@Component({
  selector: 'app-criar-pratos',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatButtonModule],
  templateUrl: './criar-pratos.component.html',
  styleUrls: ['./criar-pratos.component.css']
})
export class CriarPratosComponent {
  displayedColumns: string[] = ['ID', 'Nome', 'Descricao', 'Valor'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // Novo elemento a ser adicionado
  newElement: Pratos = {
    ID: 0,
    Nome: '',
    Descricao: '',
    Valor: 0
  };

  // Método para adicionar um novo elemento à tabela
  addElement(): void {
    // Adiciona o novo elemento ao array ELEMENT_DATA
    ELEMENT_DATA.push({ ...this.newElement });
    this.dataSource = new MatTableDataSource(ELEMENT_DATA); // Atualiza o dataSource

    // Limpa o formulário após adicionar
    this.newElement = { ID: 0, Nome: '', Descricao: '', Valor: 0 };
  }

  removeLastElement(): void {
    ELEMENT_DATA.pop(); // Remove o último prato
    this.dataSource = new MatTableDataSource(ELEMENT_DATA); // Atualiza a tabela
  }

  // Método para aplicar filtro na tabela
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}