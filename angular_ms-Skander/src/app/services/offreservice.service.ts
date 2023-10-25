import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Offre } from '../model/offre';
@Injectable({
  providedIn: 'root',
})
export class OffreserviceService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8082/api/offre/';
  addOffre(offre) {
    return this.http.post(
      this.url + 'addOffreEmploi/',
      offre,
      this.httpOptions
    );
  }

  getAllOffres() {
    return this.http.get<Offre[]>(
      this.url + 'getAllOffresEmploi',
      this.httpOptions
    );
  }
}