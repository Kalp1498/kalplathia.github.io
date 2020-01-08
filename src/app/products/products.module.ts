import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module'
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    SharedModule
  ],
  exports: [
    ProductsComponent
  ]
})

export class ProductsModule { }

