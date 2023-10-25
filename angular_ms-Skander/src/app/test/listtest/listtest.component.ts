import { Test } from 'src/app/model/test';
import { TestserviceService } from './../../services/testservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtest',
  templateUrl: './listtest.component.html',
  styleUrls: ['./listtest.component.css']
})
export class ListtestComponent implements OnInit {

constructor(private testservice:TestserviceService) { }
  
  public tests:Test[];
  
  ngOnInit(): void {
    this.testservice.getAllTests().subscribe((data)=>{
      this.tests = data
    })
  }

}
