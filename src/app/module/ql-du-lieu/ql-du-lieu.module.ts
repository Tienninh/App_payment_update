import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { routes as DMDataModule } from './dm-data/dm-data.module';



export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dm-data",
        children:DMDataModule,
      }
    ]
   
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class QlDuLieuModule { }
