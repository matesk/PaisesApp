import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCiudad(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarRegion(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${term}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisById(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }
}
