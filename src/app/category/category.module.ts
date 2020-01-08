import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module'
import { CategoryComponent } from './category.component';
import { ProductsModule } from '../products/products.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    SharedModule,
    ProductsModule, 
    FormsModule
  ], exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
