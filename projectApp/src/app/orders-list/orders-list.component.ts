import { Component, OnInit } from '@angular/core';
import {Order} from "../models/order";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: Order[] | undefined
  selectedOrder?:Order;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.findAll().subscribe((data:Order[])=> {this.orders = data})
  }

  onSelect(order:Order) : void {
    this.selectedOrder = order;
  }

}
