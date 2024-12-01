import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class MotoboyService {
  private apiUrl = 'http://localhost:8080/motoboy';

  constructor(private http: HttpClient) {}

  getStatus(id: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${id}/status`, { responseType: 'text' as 'json' });
  }

  getOrderId(id: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${id}`);
  }

  getOrderInfo(orderId: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${orderId}/pedido-info`);
  }

  finishOrder(id: number, orderId: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/${id}/finalizarPedido/${orderId}`, null, { responseType: 'text' as 'json' }).pipe(
      catchError((error) => {
        console.error('Erro na requisição', error);
        return throwError(() => new Error('Erro na requisição!'));
      })
    );
  }
}
