import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioserviceService } from './../../services/portfolioservice.service';
import { Portfolio } from './../../model/Portfolio';

@Component({
  selector: 'app-addportfolio',
  templateUrl: './addportfolio.component.html',
  styleUrls: ['./addportfolio.component.css']
})
export class AddportfolioComponent implements OnInit {

  public formation: string;
  public competence: string;
  public interet: string;
  public experience: string;
  public githuburl: string;
  public linkedinurl: string;

  constructor(private portfolioservice: PortfolioserviceService, private router: Router) { }

  public portfolio:Portfolio;
  ngOnInit(): void {
  }

  addp(){
    this.portfolio ={

      formation: this.formation,
      competence: this.competence,
      interet: this.interet,
      experience: this.experience,
      githuburl: this.githuburl,
      linkedinurl:this.linkedinurl
  }
  this.portfolioservice.addportfolio(this.portfolio)
  .subscribe((data)=>{
    this.router.navigate(["/listportfolio"])
  })
  }
}