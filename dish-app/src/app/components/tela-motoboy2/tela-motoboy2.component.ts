import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MotoboyService } from '../../services/motoboy.service';

@Component({
  selector: 'app-tela-motoboy2',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tela-motoboy2.component.html',
  styleUrl: './tela-motoboy2.component.css'
})


export class TelaMotoboy2Component implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private motoboyService: MotoboyService
  ) {}
  motoboyId: number = 0;

  ngOnInit(): void {
    const delay = 7000;

    this.activatedRoute.queryParams.subscribe(params => {
      this.motoboyId = parseInt(params['id']);
    });

    setInterval(() => {
      this.motoboyService.getStatus(this.motoboyId).subscribe(data => {
        if(data == "Status do Motoboy: Indisponível"){
          this.router.navigate(['/tela-motoboy3'], { queryParams: { id: this.motoboyId } });
        }
      });
    }, delay);
  }
}
