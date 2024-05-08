import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  styleUrl:'./app.component.css'
})
export class AppComponent {
  title = 'PaymentApp';
  sideNavStatus : boolean =false;
}
