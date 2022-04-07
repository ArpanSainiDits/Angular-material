import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dashboard } from 'src/app/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // userData = {
  //   food: '',
  //   comment:''
  // }

  food!: '';
  comment!: '';

  
  @Output() parentComponent:EventEmitter<any> = new EventEmitter();
  fg(value:any, value2:any){
    const data ={
      food: value2,
      comment : value
    }
    console.log("Food -->",value2 +" & "+ "Cooment-->",value)
    this.parentComponent.emit(data);
    // this.food = value2;
    // this.comment = value;

  }

  
}
