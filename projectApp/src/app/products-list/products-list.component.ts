import { Component, OnInit } from '@angular/core';
import {Order} from "../models/order";
import {OrderService} from "../services/order.service";
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] | undefined
  selectedProduct?:Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe((data:Product[]) => {this.products=data})
  }

  onSelect(product:Product) : void{
    this.selectedProduct = product;
  }
}
