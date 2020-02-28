import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public regName:any;
  public regPass:any;
  public regObj={};
  public regArr=[];
  

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('key')){

      this.regArr = JSON.parse(localStorage.getItem('key')) ? JSON.parse(localStorage.getItem('key')):[];
      
  }
  }

  reg(){
    this.regObj={
      name:this.regName,
      password:this.regPass
    }
    this.regArr.push(this.regObj);
    // console.log(this.regArr);
    localStorage.setItem('key',JSON.stringify(this.regArr));

    this.regName="";
    this.regPass="";

  }

}
