import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesexample',
  templateUrl: './pipesexample.component.html',
  styleUrls: ['./pipesexample.component.scss']
})
export class PipesexampleComponent implements OnInit {

  constructor() { }

employees:any[]=[
{
  empid:'001', name:'amit', salary:59000, dob:'02/sep/1992'
},
{
  empid:'002', name:'anant', salary:39000, dob:'02/aug/1991'
},
{
  empid:'003', name:'raju', salary:67000, dob:'02/sep/1993'
},{
  empid:'004', name:'kalia', salary:89000, dob:'02/sep/1988'
}

];

  ngOnInit() {
  }

}
