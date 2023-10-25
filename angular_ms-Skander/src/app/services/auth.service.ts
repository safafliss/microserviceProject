import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8082/user'; // URL de base de votre backend
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) {}
  public token:String;
  register(user) {
    // Utilisez la variable 'url' pour construire l'URL complète du point de terminaison d'inscription
    const registerUrl = `${this.url}/signup`;
    return this.http.post<any>(registerUrl, user);
  }

  // login(user) {
  //   // Utilisez la variable 'url' pour construire l'URL complète du point de terminaison de connexion
  //   const loginUrl = `${this.url}/login`;
  //   return this.http.post<any>(loginUrl, user);
  // }
  settingToken(token,keycloaktoken){
    if(token){
      localStorage.setItem("token", token);
      localStorage.setItem("keycloaktoken", keycloaktoken);
    }
  }
  login(user){
    console.log("hhhhhhhhhhhhhhhhhhhhhhhh",user);
    if(this.isLoggedIn()){
      this.router.navigate(['/home'])
    }else{
      this.http.post(`${this.url}/login`,{headers: new HttpHeaders({'Content-Type': 'application/json'}),email:user.email,password:user.password}).subscribe((data) =>{
        console.log(data)
        this.settingToken(data['accessToken'],data["keycloaktoken"])
        if("accessToken" in data){
          
          this.router.navigate(['/home'])
        }else{
          this.router.navigate(['/login'])
        }
        },
        err => {
          //this.errors = err['error'];
          this.router.navigate(['/error'])
        }
      );
    }
    
  }
  // isLoggedIn(){
  //   if(localStorage.getItem("token")){
  //     this.updateData(localStorage.getItem("token"))
  //     if (this.token_expires>new Date()){
  //     this.httpOptions = {
  //       headers: new HttpHeaders({'Content-Type': 'application/json','Authorization':`Bearer `  + localStorage.getItem("token")})
  //     }
  //     this.isLogged.next(true)
  //     return true;
  //   }
  //   }
  //   this.clearUpdatedData()
  //   this.isLogged.next(false)
  //   return false;
  // }

  getToken(): string {
    return localStorage.getItem('keycloaktoken');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    window.sessionStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
