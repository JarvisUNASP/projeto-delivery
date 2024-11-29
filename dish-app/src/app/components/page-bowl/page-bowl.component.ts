import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalCartComponent } from './modal-cart/modal-cart.component';
import { RouterModule } from '@angular/router';
import { PageBowlService, BowlItem } from '../../services/page-bowl.service';

@Component({
  selector: 'app-page-bowl',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule, RouterModule],
  templateUrl: './page-bowl.component.html',
  styleUrl: './page-bowl.component.css'
})
export class PageBowlComponent implements OnInit {
  bowls: BowlItem[] = [];

  constructor(private dialog: MatDialog, private bowlService: PageBowlService) {}

  ngOnInit(): void {
    this.loadBowls();
  }

  loadBowls(): void {
    this.bowlService.getBowls().subscribe(data => {
      this.bowls = data;
    });
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalCartComponent, {
      width: '700px',
      height:'400px',
      panelClass: 'customizar-modal',
      position: {top: '-100%', left: '5%' },

    
    });
 }
}
