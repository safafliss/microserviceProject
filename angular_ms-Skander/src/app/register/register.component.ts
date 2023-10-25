import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean = false; //
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  registerUser() {
    if (this.form.valid) {
      this.auth.register(this.form.value).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        (err) => console.error(err)
      );
    } else {
      // Si le formulaire est invalide, marquez-le comme soumis pour afficher les erreurs
      this.formSubmitted = true;
    }
  }
}
