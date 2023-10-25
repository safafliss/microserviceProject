import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { ContratserviceService } from '../../services/contratservice.service';
import { Contrat } from '../../model/contrat';


@Component({
  selector: 'app-listcontrat',
  templateUrl: './listcontrat.component.html',
  styleUrls: ['./listcontrat.component.css']
})
export class ListcontratComponent implements OnInit {
  contrats: any[]; // Use the appropriate type for contrats

  constructor(private contratservice: ContratserviceService) { }

  ngOnInit(): void {
    this.contratservice.getAllContrats().subscribe((data) => { // Specify the type of data as an array of the appropriate type
      this.contrats = data as Contrat[];
    });
  }
}