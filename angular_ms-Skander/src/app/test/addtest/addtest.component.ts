import { Test } from './../../model/test';
import { Formation } from './../../model/formation';
import { TestserviceService } from './../../services/testservice.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
  public idformation: number;
  public test_name: string;
  public description: string;
  public passing_score: number;
  public duree: number;
  public responsable: string; 
  public formation:Formation;

  constructor(private testserviceService:TestserviceService, private router:Router) { }
  public test:Test;
  ngOnInit(): void {
  //   this.test ={
  //     idTest:null,
  //     test_name: "test2",
  //     description: "test2 test1",
  //     passing_score: 1,
  //     duree: 100.55,
  //     responsable: "test3",
  //     formation:null
  // }
  //   this.testserviceService.addTest(this.test,1)
  //   .subscribe((data)=>{
  //     console.log(data)
  //   })
  }

  addtest(){
    this.test ={
      idTest:null,
      test_name: this.test_name,
      description: this.description,
      passing_score: this.passing_score,
      duree: this.duree,
      responsable: this.responsable,
      formation:null
  }
  this.testserviceService.addTest(this.test,this.idformation)
  .subscribe((data)=>{
    this.router.navigate(["/listtest"])
  })
  }

}
