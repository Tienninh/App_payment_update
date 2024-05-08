import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'detail/:id', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
