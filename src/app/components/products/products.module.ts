import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';

import { MaterialModule } from '../../material/material.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent, ProductComponent],
  imports: [CommonModule, ProductRoutingModule, MaterialModule],
})
export class ProductsModule {}
