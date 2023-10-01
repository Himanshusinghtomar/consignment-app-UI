import { Component } from '@angular/core';
import { ConsignmentService } from '../consignment.service';
import { ConsignmentModel } from '../consignmentModel';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent {

  consignments:ConsignmentModel[] = [];
  constructor(private consignmentservice:ConsignmentService)
  {

  }

  ngOnInit()
  {
    this.consignmentservice.getConsignments().subscribe(data => {
      this.consignments = data;
      console.log(this.consignments);
    });
  }

}
