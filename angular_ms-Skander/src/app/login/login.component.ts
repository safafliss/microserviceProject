import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean = false; // Variable pour suivre si le formulaire a été soumis

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    
      // window.sessionStorage.clear();
      localStorage.clear();
    console.log("logging out")
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginUser() {
    if (this.form.valid) {
      // Si le formulaire est valide, continuez avec la soumission
      this.auth.login(this.form.value);
    } else {
      // Si le formulaire est invalide, marquez-le comme soumis pour afficher les erreurs
      this.formSubmitted = true;
    }
  }
}
