import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginName:any;
  public loginPass:any;
  public fromReg=[]; 
  public msg:any;
  public result:boolean;
  public status:boolean;


  constructor() { }

  ngOnInit(): void {
   

    this.result=false;
    localStorage.setItem("result",JSON.stringify(this.result));

    this.fromReg=JSON.parse(localStorage.getItem("key"));
    console.log(this.fromReg);
  }

  login(){
    


    for(let i=0;i<this.fromReg.length;i++){
      if((this.loginName==this.fromReg[i].name)&&(this.loginPass==this.fromReg[i].password)){


this.status=true;
this.loginName="";
this.loginPass="";

      }
   
    }
    if(this.status){
      this.result=true;   
      localStorage.setItem("result",JSON.stringify(this.result));
      this.msg="congo";
    }
    else{
      this.msg="please check";

    
    

    }

  }

}
