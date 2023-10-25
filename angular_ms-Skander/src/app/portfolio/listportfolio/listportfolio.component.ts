import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/model/Portfolio';
import { PortfolioserviceService } from 'src/app/services/portfolioservice.service';

@Component({
  selector: 'app-listportfolio',
  templateUrl: './listportfolio.component.html',
  styleUrls: ['./listportfolio.component.css']
})
export class ListportfolioComponent implements OnInit {

  constructor(private portfolioservice:PortfolioserviceService) { }
  public porfs:Portfolio[];
  
  ngOnInit(): void {
    this.portfolioservice.getAllportfolios().subscribe((data)=>{
      this.porfs = data
    })
  }
  deletePortfolio(id: number) {
    this.portfolioservice.deletePortfolio(id).subscribe(() => {
      // Update the porfs array after deletion (assuming you're fetching porfs from an API)
      this.portfolioservice.getAllportfolios().subscribe(data => {
        this.porfs = data;
      });
    });

}
}