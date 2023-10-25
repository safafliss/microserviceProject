import { Component, OnInit } from '@angular/core';
import { Offre } from './../../model/offre';
import { OffreserviceService } from './../../services/offreservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addoffreemplois',
  templateUrl: './addoffreemplois.component.html',
  styleUrls: ['./addoffreemplois.component.css'],
})
export class AddoffreemploisComponent implements OnInit {
  public idOffreEmploi: number;
  public title: string;
  public description: string;
  public category: string;
  public company: string;
  public salary: number;

  constructor(
    private offreserviceService: OffreserviceService,
    private router: Router
  ) {}
  public offre: Offre;
  ngOnInit(): void {
    //   this.offre ={
    //     idOffreEmploi:null,
    //     title: "test2",
    //     description: "test2 test1",
    //     category: "1",
    //     company: "test",
    //     salary: 1,
    // }
    //   this.offreserviceService.addOffre(this.offre)
    //   .subscribe((data)=>{
    //     console.log(data)
    //   })
  }

  addOffre() {
    this.offre = {
      idOffreEmploi: null,
      title: this.title,
      description: this.description,
      category: this.category,
      company: this.company,
      salary: this.salary,
    };
    this.offreserviceService.addOffre(this.offre).subscribe((data) => {
      this.router.navigate(['/listoffreemplois']);
    });
  }
}