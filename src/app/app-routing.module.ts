import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsignmentComponent } from './consignment/consignment.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'consignments',component:ConsignmentComponent},
  {path:'orders',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
