import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from '../model/Portfolio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioserviceService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8082/api/portfolio/';
  addportfolio(portf){
    return this.http.post(this.url+"addPortfolio/",portf,this.httpOptions)
  }

  getAllportfolios(){
    return this.http.get<Portfolio[]>(this.url+"getAllPortfolios",this.httpOptions)
  }
  deletePortfolio(id: number): Observable<any> {
    return this.http.delete(this.url + '/deletePortfolio/' + id);
  }
}