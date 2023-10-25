import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntretiensService } from '../../services/entretiens.service';
import { Entretien } from '../../model/entretien';
@Component({
  selector: 'app-addentretient',
  templateUrl: './addentretient.component.html',
  styleUrls: ['./addentretient.component.css'],
})
export class AddentretientComponent implements OnInit {
  constructor(
    private router: Router,
    private entretienService: EntretiensService
  ) {}

  newEntretien: Entretien = new Entretien();
  ngOnInit(): void {}

  createEntretien() {
    this.entretienService.addEntretien(this.newEntretien).subscribe(
      (createdEntretien: Entretien) => {
        // Handle success (e.g., show a success message)
        console.log('Entretien created:', createdEntretien);
        // Optionally, reset the form
        this.newEntretien = new Entretien();
        this.router.navigate(['/listentretient']);
      },
      (error) => {
        // Handle errors (e.g., show an error message)
        console.error('Error creating Entretien:', error);
      }
    );
  }

}
