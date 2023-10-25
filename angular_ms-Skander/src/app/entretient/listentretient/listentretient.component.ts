import { Component, OnInit } from '@angular/core';
import { EntretiensService } from 'src/app/services/entretiens.service';

@Component({
  selector: 'app-listentretient',
  templateUrl: './listentretient.component.html',
  styleUrls: ['./listentretient.component.css']
})
export class ListentretientComponent implements OnInit {
  entretiens: any[]; 
  constructor(private entretienService: EntretiensService) { }

  ngOnInit() {
    // Call the service method to fetch the list of Entretien
    this.entretienService.getAllEntretiens().subscribe(
      (data: any[]) => {
        this.entretiens = data;
      },
      (error) => {
        console.error('Error fetching Entretiens:', error);
      }
    );
  }

}
