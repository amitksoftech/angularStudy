import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.scss']
})
export class IfelseComponent implements OnInit {


isvalidcase1:boolean=true;
isvalidcase2:boolean=true;

changevaluecase1(value){
this.isvalidcase1=value;
}


changevaluecase2(value){
  this.isvalidcase2=value;
  }



  constructor() { }

  ngOnInit() {
  }

}
