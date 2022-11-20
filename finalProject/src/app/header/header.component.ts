import { Component, Input, OnInit } from '@angular/core';
import { ProductList } from '../Model/repository';
import { Product } from '../Model/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  products: ProductList;
  cart!: Product[];

  constructor() { 
    this.products = new ProductList();
  }

  pushOrder(): void{
    this.cart = this.products.list.filter(item => item.checked)
  }


  ngOnInit(): void {
  }

}
