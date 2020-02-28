import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // @Input()childValue:number;
  // @Output()fromChild=new EventEmitter();

  example(){
    // this.fromChild.emit();
  } 


  constructor() { }

  ngOnInit(): void {
  }

}
