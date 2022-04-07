import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  isSpecial = false;
  abc = false;
  // list:any=[]

  change1(){
    // if(this.abc == false){
    //   this.abc = true;
    // }
    // else{
    //   this.abc = false;
    // }
    this.abc == false ? this.abc = true : this.abc = false;
    
  
  }




  ngOnInit(){
    
  }
  
  pipe1 = "this is a pipe";
    list = [0,1,2,3,4,5,6,7,8,9,10]


  name: any;
  name2: any;

  

    parentComponent(data:any){
    console.warn(data);
    this.name = data.food;
    this.name2 = data.comment;
  }
   
    
}
