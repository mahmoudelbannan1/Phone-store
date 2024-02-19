import { Component, OnInit } from '@angular/core';
import { ProductStaticService } from 'src/app/services/product-static.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  products: any;
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => (this.products = products),
    });
  }

  add(i: number) {
    // this.productService.cartItemsCount++;
    this.productService.cartItemsCount++;

    // this.productService.products[i].quantity--;
    this.products[i]['quantity']--;
    // console.log(this.productService.cartItemsCount);
  }
}
