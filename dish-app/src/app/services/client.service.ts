import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Client {
  id?: number;
  nome: string;
  endereco: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  createClient(clientData: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, clientData).pipe(
      catchError((error) => {
        console.error('Erro na requisição', error);
        return throwError(() => new Error('Erro na requisição!'));
      })
    );
  }
}
