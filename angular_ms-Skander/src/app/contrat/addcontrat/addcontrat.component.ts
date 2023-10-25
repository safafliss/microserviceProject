import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Contrat } from '../../model/contrat';
import { ContratserviceService } from '../../services/contratservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.css']
})
export class AddcontratComponent implements OnInit {
public idContrat : number;
public type : string;
public description : string;
public etat : string;
public instructor : string;
public salaire : string;

  
  constructor( private authservice: AuthService, private router: Router ,   private ContratserviceService: ContratserviceService, ) { }

  public contrat:Contrat;
  ngOnInit(): void {
  //   this.contrat ={
  //     idContrat:null,
  //     type:"ss",
  //     description:"ss",
  //     etat:"ddd",
  //     instructor:"ddd",
  //     salaire:"ss"

  // }
  //   this.ContratserviceService.addContrat(this.contrat)
  //   .subscribe((data)=>{
  //     console.log(data)
  //   })
  }

  addcontrat(){
    this.contrat ={
      idContrat:null,
      type:this.type,
      description:this.description,
      etat:this.etat,
      instructor:this.instructor,
      salaire:this.salaire
  }
  this.ContratserviceService.addContrat(this.contrat).subscribe((data) => {
    this.router.navigate(['/listcontrat']);
  });
  }
}