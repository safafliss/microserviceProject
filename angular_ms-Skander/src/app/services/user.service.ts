import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { APP_CONFIG, IAppConfig } from '../shared/appconfig';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:8082/user';
  constructor(
    private http: HttpClient,
  
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.url +'/' + id);
  }

  addUser(user: User): Observable<HttpResponse<any>> {
    return (
      this.http.post<HttpResponse<any>>(
        this.url + '/',
        JSON.stringify(user),
        { headers: this.headers, observe: 'response' }
      )
    );
  }

  updateUser(user: User): Observable<HttpResponse<any>> {
    return this.http.put(
      this.url + '/' + user._id,
      JSON.stringify(user),
      { headers: this.headers, observe: 'response' }
    );
  }

  deleteUser(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(this.url + '/' + id);
  }
}
