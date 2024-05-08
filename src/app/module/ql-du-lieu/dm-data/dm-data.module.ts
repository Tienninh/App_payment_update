import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmDataIndexComponent } from './dm-data-index/dm-data-index.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: "",
    component: DmDataIndexComponent,
    data: {
      title: "Quản lý danh mục",
      breadcrumb: "Quản lý danh mục ",
    },
  },
];

@NgModule({
  declarations: [
    DmDataIndexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DmDataModule { }
