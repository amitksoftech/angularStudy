import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data, event) {
    var id = document.getElementById('submitform');
    debugger;
    console.log('form data', data,id);
  }

}
