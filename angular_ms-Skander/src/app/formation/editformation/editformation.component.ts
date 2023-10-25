import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/model/formation';
import { FormationserviceService } from './../../services/formationservice.service';
@Component({
  selector: 'app-editformation',
  templateUrl: './editformation.component.html',
  styleUrls: ['./editformation.component.css']
})
export class EditformationComponent implements OnInit {
  public formation: Formation;
  public title: string;
  public instructor: string;
  public language: string;
  public category: string;
  public duration: number;
  public price: number;
  public nbr_sessions: number;
  public description: string;

  constructor(private route: Router, private currentRoute: ActivatedRoute, private formationService: FormationserviceService) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params['id'];
     if(id!=null){
       this.formationService.getFormationById(id).subscribe(
         (data: Formation)=>{
          this.formation=data;
          console.log(this.formation);
          //this.populateFormFields();
        }
       )
     }
  }

  // private populateFormFields() {
  //   this.title = this.formation.title;
  //   this.instructor = this.formation.instructor;
  //   this.language = this.formation.language;
  //   this.category = this.formation.category;
  //   this.duration = this.formation.duration;
  //   this.price = this.formation.price;
  //   this.nbr_sessions = this.formation.nbr_sessions;
  //   this.description = this.formation.description;
  // }

  onUpdate(){
    this.formationService.updateFormation(this.formation).subscribe(
      () => this.route.navigate(['/listformation']),
      () => {
        console.log('error'),
        () =>{
          console.log('complete')
        }
      }
    )
    alert ('SUCCESS\n\n');

}

}
