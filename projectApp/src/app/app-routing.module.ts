import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

const routes: Routes = [
  {
      path:'contact',
      component: FormComponent
  },
  {
    path:'users',
    component: UsersListComponent
  },
  {
    path:'products',
    component: ProductsListComponent
  },
  {
    path:'orders',
    component: OrdersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
