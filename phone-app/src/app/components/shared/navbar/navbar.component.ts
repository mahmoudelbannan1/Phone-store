import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductStaticService } from 'src/app/services/product-static.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  count: any;
  constructor(private productService: ProductStaticService) {}
  ngOnInit(): void {
    this.count = this.productService.cartItemsCount;
  }
}
