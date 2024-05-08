import { Component, Input, OnInit, input } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.components.css',

})
export class MenuComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: '1',
      name: 'Khuyến Mại',
      icon:'fa-solid fa-tag',
      routerLink: '/product/detail'
  
    },

    {
      number: '2',
      name: 'Khách Hàng',
      icon:'fa-solid fa-tag',
      routerLink: '/news/detail'
    },

    {
      number: '3',
      name: 'Chiến Dịch Tiếp Thị',
      icon:'fa-solid fa-tag'
    },

    {
      number: '4',
      name: 'Landing Page',
      icon:'fa-solid fa-tag'
    }
  ]
  ngOnInit(): void {

  }
}
