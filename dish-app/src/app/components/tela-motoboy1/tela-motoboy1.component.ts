import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MotoboyService } from '../../services/motoboy.service';

@Component({
  selector: 'app-tela-motoboy1',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './tela-motoboy1.component.html',
  styleUrl: './tela-motoboy1.component.css'
})
export class TelaMotoboy1Component {
  motoboyId: number = 1;

  constructor(private motoboyService: MotoboyService, private router: Router){}

  proceed() {
    this.motoboyService.getStatus(this.motoboyId).subscribe(data => {
      if(data == "Status do Motoboy: Disponível"){
        this.router.navigate(['/tela-motoboy2'], { queryParams: { id: this.motoboyId } });
      } else if (data == "Status do Motoboy: Indisponível"){
        this.router.navigate(['/tela-motoboy3'], { queryParams: { id: this.motoboyId } });
      }
    })
  }

}
