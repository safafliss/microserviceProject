import { Formation } from 'src/app/model/formation';
import { FormationserviceService } from './../../services/formationservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listformation',
  templateUrl: './listformation.component.html',
  styleUrls: ['./listformation.component.css']
})
export class ListformationComponent implements OnInit {

  constructor(private formationservice:FormationserviceService) { }
  public formations:Formation[];
  ngOnInit(): void {
    this.formationservice.getAllFormations().subscribe((data)=>{
      this.formations = data as Formation[]
    })
  }
  deleteFormation(formation : Formation) {
    let i = this.formations.indexOf(formation);
    if (confirm('Are you sure to delete'))
    this.formationservice.deleteFormation(formation.idFormation).subscribe(
      ()=>{
        this.formations.splice(i,1)
        alert('suppression effectuée avec succès');
      } 
    );
  }

}


