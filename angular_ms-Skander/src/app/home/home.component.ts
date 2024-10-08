import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countUser: number;
  title = 'No of user available';
  today: number = Date.now();
  constructor(private userService: UserService, private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
    if(!this.authservice.isLoggedIn()){
      this.router.navigate(['/login'])
    }
    this.userService.getUsers().subscribe((res) => {
      this.countUser = res.length;
    });
  }
}
