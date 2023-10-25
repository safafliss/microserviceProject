import { Component, OnInit } from '@angular/core';
import { Formation } from './../../model/formation';
import { FormationserviceService } from './../../services/formationservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css'],
})
export class AddformationComponent implements OnInit {
  public idformation: number;
  public title: string;
  public description: string;
  public category: string;
  public instructor: string;
  public language: string;
  public duration: number;
  public price: number;
  public nbr_sessions: number;
  constructor(
    private formationService: FormationserviceService,
    private router: Router
  ) {}
  public formation: Formation;

  ngOnInit(): void {
    // this.formation = {
    //   idFormation: null,
    //   title: 'test2',
    //   description: 'test2 test1',
    //   duration: 21,
    //   price: 100.55,
    //   category: 'test3',
    //   instructor: 'test4',
    //   language: 'test5',
    //   nbr_sessions: 6,
    // };
    // this.formationService.addFormation(this.formation).subscribe((data) => {
    //   console.log(data);
    // });
  }

  addFormation() {
    this.formation = {
      idFormation: null,
      title: this.title,
      description: this.description,
      duration: this.duration,
      price: this.price,
      category: this.category,
      instructor: this.instructor,
      language: this.language,
      nbr_sessions: this.nbr_sessions,
    };
    this.formationService.addFormation(this.formation).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/listformation']);
    });
  }
}
