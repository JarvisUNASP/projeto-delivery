import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tela-cozinha',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './tela-cozinha.component.html',
  styleUrls: ['./tela-cozinha.component.css']
})
export class TelaCozinhaComponent implements OnInit {
  // Armazena os tempos restantes em segundos
  temposRestantes: number[] = [5 * 60, 7 * 60, 9 * 60]; // 5, 7 e 9 minutos

  ngOnInit() {
    this.iniciarContagemRegressiva();
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
}
