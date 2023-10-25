import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Formation} from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationserviceService {

  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  
  private url = 'http://localhost:8082/api/formations/';

  addFormation(formation){
    return this.http.post(this.url+"addFormation/",formation,this.httpOptions);
  }

  getAllFormations(){
    return this.http.get(this.url+"getAllFormations",this.httpOptions);
  }

  deleteFormation(id:number){
    return this.http.delete(this.url + '/deleteFormation/' + id);
  }

  updateFormation(formation: Formation){
    return this.http.put(this.url + '/updateFormation' , formation);
  }

  getFormationById(id:number){
    return this.http.get(this.url + `/getFormationById/${id}`, this.httpOptions);
  }

}
