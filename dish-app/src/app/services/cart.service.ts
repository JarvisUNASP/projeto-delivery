
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Dish } from './dish.service';

export interface Item {
  id?: number;
  quantidade: number;
  precoTotal: number;
  dish: Dish;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/item-carrinho';

  constructor(private http: HttpClient) {}

  getCart(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`);
  }

  createItem(dishId: number): Observable<Item> {
    return this.http.post<Item>(`${this.apiUrl}/${dishId}`, null).pipe(
      catchError((error) => {
        console.error('Erro na requisição', error);
        return throwError(() => new Error('Erro na requisição!'));
      })
    );
  }

  updateItem(dishId: number): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${dishId}`, null);
  }

  deleteItem(id: number): Observable<Dish> {
    return this.http.delete<Dish>(`${this.apiUrl}/${id}`);
  }
}
