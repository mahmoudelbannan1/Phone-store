import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './components/products/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    NotFoundComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
