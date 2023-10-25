import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/model/offre';
import { OffreserviceService } from './../../services/offreservice.service';
@Component({
  selector: 'app-listoffreemplois',
  templateUrl: './listoffreemplois.component.html',
  styleUrls: ['./listoffreemplois.component.css'],
})
export class ListoffreemploisComponent implements OnInit {
  constructor(private offreservice: OffreserviceService) {}

  public offres: Offre[];

  ngOnInit(): void {
    this.offreservice.getAllOffres().subscribe((data) => {
      this.offres = data;
    });
  }
}