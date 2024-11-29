import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DishService, Dish } from '../../services/dish.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pratos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './dish-create.component.html',
  styleUrl: './dish-create.component.css'
})
export class DishFormComponent implements OnInit{
  dish: Dish = {
    name: '',
    description: '',
    price: 0
  };
  isEdit: boolean = false;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.dishService.getDish(+id).subscribe((data: Dish) => {
        this.dish = data;
      });
    }
  }

  saveDish() {
    if (this.isEdit) {
      this.dishService.updateDish(this.dish.id!, this.dish).subscribe(() => {
        this.router.navigate(['/listar-pratos']);
      });
    } else {
      this.dishService.createDish(this.dish).subscribe(() => {
        this.router.navigate(['/listar-pratos']);
      });
    }
  }

}
