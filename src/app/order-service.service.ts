import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(
    private http:HttpClient
  ) { }

  //add order
//it is of any type
  public addOrder(order : any)
  {
    return this.http.post(`http://localhost:8080/consignment`,order)
  }
}
