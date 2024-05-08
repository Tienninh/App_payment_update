import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './store-details/header/header.component';
import { FooterComponent } from './store-details/footer/footer.component';
import { ContentComponent } from './store-details/content/content.component';
import { ContactComponent } from './store-details/contact/contact.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MenuComponent } from './components/auth/menu/menu.component';
import { MenuKMComponent } from './store-details/content/menu-km/menu-km.component';
import { MenuKHComponent } from './store-details/content/menu-kh/menu-kh.component';
import { MenuCDTTComponent } from './store-details/content/menu-cdtt/menu-cdtt.component';
import { MenuLPComponent } from './store-details/content/menu-lp/menu-lp.component';
import { HomeComponent } from './home/home.component';

import { QlSieuDuLieuModule } from './module/ql-sieu-du-lieu/ql-sieu-du-lieu.module';
import { QlDuLieuModule } from './module/ql-du-lieu/ql-du-lieu.module';








// import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ContactComponent,
    LoginComponent,
    MenuComponent,
    MenuKMComponent,
    MenuKHComponent,
    MenuCDTTComponent,
    MenuLPComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
     QlDuLieuModule,
      QlSieuDuLieuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
