import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8082/api/tests/';
  addTest(test,id){
    return this.http.post(this.url+"addTest/"+id,test,this.httpOptions)
  }

  getAllTests(){
    return this.http.get<Test[]>(this.url+"getAllTests",this.httpOptions)
  }
}
