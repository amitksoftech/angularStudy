import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public alldata:any;
  constructor(
private dataService:DataService

  ) { }

  ngOnInit() {
    this.countryDetails();
  }

public countryDetails(){

  this.dataService.getCountryDetails().subscribe(data =>{
    // this.alldata = data
    this.alldata = this.parseData(data);

  });


}

public  parseData(data) {
  
  //const countryname = JSON.parse(data);
   

  //this.people = res.response;
   // alert(this.name);

  //console.log(countryname.);
  console.log(data);

  var result = data.map( function(val){
    return val['name'];
  });

  return result;

}


}
