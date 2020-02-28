import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public modelTitle:any;
  public modelFirstName:any;
  public modelLastName:any;
  public modelPassword:any;
  public modelConfirmPassword:any;
  public modelEmail:any;
  model: any = {};
public modelAcceptTerms:any;


  constructor() { }

  ngOnInit(): void {
    

  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

}



