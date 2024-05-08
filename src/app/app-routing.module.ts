import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'news', loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule) },
  { path: 'product', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) },
  { path: '', component:HomeComponent},
 
  //  {path:"", component:MenuKhuyenMai}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
