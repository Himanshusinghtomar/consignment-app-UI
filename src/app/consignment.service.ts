import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ConsignmentModel } from './consignmentModel';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {

  constructor(private http:HttpClient) { }

  public getConsignments():Observable<ConsignmentModel[]>
  {

    return this.http.get<ConsignmentModel[]>("http://localhost:8080/consignments");
  }
}
