import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  constructor(private router:Router,
    private actrouter:ActivatedRoute) { }

  ngOnInit() {
    let flag = localStorage.getItem("loginflag");
    console.log(flag);

    // if (flag === "true") {
    //   this.router.navigateByUrl('/dashboard1');

    // }

    if (flag !== "true") {
      this.router.navigateByUrl('/login');

    }

    let emailfromlogin = this.actrouter.snapshot.paramMap.get('emailid');
    console.log("from dashboard1::::");
    console.log(emailfromlogin);
  }



}
