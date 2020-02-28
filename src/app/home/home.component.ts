import { Component, OnInit } from '@angular/core';
import { FebService } from '../feb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public info:any;
  public count=5;
  public p=1;
  // public term:any;
  public name:any;

  constructor(private sample:FebService) { }

  press(){
    this.sample.toGet().subscribe((res=>{
      this.info=res.data;
      
    }))
  }

  ngOnInit(): void {

  }

}
