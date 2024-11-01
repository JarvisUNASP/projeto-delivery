import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BowlItem {
  id: number;
  name: string;
  size: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class PageBowlService {
  private apiUrl = 'http://localhost:8080/bowls'; // URL da API para os bowls

  constructor(private http: HttpClient) {}

  // Método para obter todos os bowls
  getBowls(): Observable<BowlItem[]> {
    return this.http.get<BowlItem[]>(this.apiUrl);
  }

  // Método para obter um bowl específico pelo ID
  getBowl(id: number): Observable<BowlItem> {
    return this.http.get<BowlItem>(`${this.apiUrl}/${id}`);
  }

  // Método para criar um novo bowl
  createBowl(bowl: BowlItem): Observable<BowlItem> {
    return this.http.post<BowlItem>(this.apiUrl, bowl);
  }

  // Método para atualizar um bowl existente
  updateBowl(id: number, bowl: BowlItem): Observable<BowlItem> {
    return this.http.put<BowlItem>(`${this.apiUrl}/${id}`, bowl);
  }

  // Método para deletar um bowl pelo ID
  deleteBowl(id: number): Observable<BowlItem> {
    return this.http.delete<BowlItem>(`${this.apiUrl}/${id}`);
  }
}