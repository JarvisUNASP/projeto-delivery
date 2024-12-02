import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from './client.service';
import { Item } from './cart.service';

export interface Order {
  id?: number;
  cliente: Client;
  motoboyId: number;
  status: string;
  valorTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/pedido';
  private assingUrl = 'http://localhost:8080/cozinha/atribuirPedido';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  createOrder(clientId: number): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/criar/${clientId}`, null).pipe(
      catchError((error) => {
        console.error('Erro na requisição', error);
        return throwError(() => new Error('Erro na requisição!'));
      })
    );
  }

  assignOrder(id: number): Observable<string> {
    return this.http.post<string>(`${this.assingUrl}/${id}`, null, { responseType: 'text' as 'json' }).pipe(
      catchError((error) => {
        console.error('Erro na requisição', error);
        return throwError(() => new Error('Erro na requisição!'));
      })
    );
  }
    
}
