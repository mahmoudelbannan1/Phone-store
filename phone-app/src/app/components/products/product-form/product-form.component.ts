import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  productId: any;
  product: any;
  mySub: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.productId = params['id'];
        this.getName.setValue('');
        this.getPrice.setValue(null);
        this.getQuantity.setValue(null);
      },
    });

    if (this.productId != 0) {
      this.mySub = this.productService
        .getProductById(this.productId)
        .subscribe({
          next: (data) => {
            this.product = data;
            this.getName.setValue(this.product.name);
            this.getPrice.setValue(this.product.price);
            this.getQuantity.setValue(this.product.quantity);
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.mySub.unsubscribe();
  }
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(null, [Validators.required, Validators.min(10)]),
    quantity: new FormControl(null, [Validators.required]),
  });

  get getName() {
    return this.productForm.controls['name'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }

  formOperation(e: any) {
    e.preventDefault();
    if (this.productForm.status == 'VALID') {
      if (this.productId != 0) {
        //edit Product
        this.productService
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      } else {
        // add Product
        this.productService.addProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
        });
      }
      console.log(this.productForm.value);
    } else {
      console.log('Fix Errors');
    }
  }
}
