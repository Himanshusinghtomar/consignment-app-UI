import { Component } from '@angular/core';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor(private orderService:OrderServiceService){}

  public order ={

    consignmentCategory: '',
	  deleveryPartner:'',
    consignmentStatus:''

  };

  formSubmit()
  {
   
    this.orderService.addOrder(this.order).subscribe(
      (data) => {
        // success return 
        console.log(data)
        alert("Success")
      },
      (error) =>
      {
        console.log(error)
        alert("Error")
      }
    )
  }

}
