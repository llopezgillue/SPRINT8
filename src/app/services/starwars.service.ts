import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  private apiUrl = 'https://swapi.dev/api/starships';
  private placeholderImageUrl = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';

  constructor(private http: HttpClient) { }

  getStarships(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/?page=${page}`);
  }

  getStarshipDetails(url: string): Observable<any> {
    return this.http.get(url);
  }

  getStarshipImageUrl(id: string): string {
    
    if (id) {
      return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    }
    // Si el ID es inválido, se utiliza la URL del marcador de posición
    return this.placeholderImageUrl;
  }
}






