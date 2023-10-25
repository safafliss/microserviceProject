import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratserviceService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8082/api/contrat/';
  addContrat(contrat){
    return this.http.post(this.url+"addContrat",contrat,this.httpOptions)
  }

  getAllContrats(){
    return this.http.get(this.url+"getAllContrats",this.httpOptions)
  }
}