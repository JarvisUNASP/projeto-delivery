import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tela-motoboy2',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tela-motoboy2.component.html',
  styleUrl: './tela-motoboy2.component.css'
})


export class TelaMotoboy2Component implements OnInit {
  constructor(private router: RouterModule) {}

  ngOnInit(): void {
    const delay = 7000;

    setTimeout(() => {
      window.location.href = '/tela-motoboy3';
    }, delay);
  }
}
