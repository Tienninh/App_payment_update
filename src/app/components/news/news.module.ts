import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    NewsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
