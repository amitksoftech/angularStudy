import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Registeration } from '../models/registeration.model';

@Component({
  selector: 'app-simpleregisteration',
  templateUrl: './simpleregisteration.component.html',
  styleUrls: ['./simpleregisteration.component.scss']
})
export class SimpleregisterationComponent implements OnInit {

  constructor() { }
  //const registerationForm:Registeration;

  ngOnInit() {
  }


  registerationForm = new FormGroup({
    name: new FormControl(''),
    emailid: new FormControl(''),
    password: new FormControl('')
  });


  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerationForm.value);


  }

}
