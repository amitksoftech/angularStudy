import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../userdetails';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userdetailsapi = "http://localhost:5000/api/members";


  constructor(
    private http: HttpClient
  ) { }

  public getCountryDetails() {
    return this.http.get("http://localhost:5000/api/members");
  }



  public getCredFrombckend(): Observable<UserDetails[]> {
    console.log("here");
   // console.log(this.http.get<UserDetails[]>(this.userdetailsapi));
     return this.http.get<UserDetails[]>("http://localhost:5000/api/members");
    
    // console.log("crossed here");

    // return this.http.get<UserDetails[]>(this.userdetailsapi);

  }
  // public getCredsFrombckend() {
  //   console.log("here");
  //  // console.log(this.http.get<UserDetails[]>(this.userdetailsapi));
  //   console.log(this.http.get("http://localhost:5000/api/members"));
    
  //   console.log("crossed here");

  //  // return this.http.get<UserDetails[]>(this.userdetailsapi);

  // }


}
