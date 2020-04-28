import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../userdetails';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewuserdetailsmodel',
  templateUrl: './viewuserdetailsmodel.component.html',
  styleUrls: ['./viewuserdetailsmodel.component.scss']
})
export class ViewuserdetailsmodelComponent implements OnInit {

  userdetailsts: UserDetails[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.gettsuserdetails();
  }

  gettsuserdetails() {
    this.dataservice.getCredFrombckend().subscribe(userdetails => {
      this.userdetailsts = userdetails
      console.log(this.userdetailsts);
    });
  }
}
