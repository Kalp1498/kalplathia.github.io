import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module'
import { CategoryComponent } from './category.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    SharedModule,
    ProductsModule
  ], exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
