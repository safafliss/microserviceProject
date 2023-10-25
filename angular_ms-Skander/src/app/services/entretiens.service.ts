import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntretiensService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8082/entretiens';

  addEntretien(entretien){
    return this.http.post<any>(this.url, entretien , this.httpOptions);
  }

  getAllEntretiens(){
    return this.http.get(this.url,this.httpOptions)
  }

}
