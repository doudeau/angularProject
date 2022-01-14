import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ordersUrl = 'assets/orders.json';


  constructor( private http: HttpClient) { }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl)
  }
}
