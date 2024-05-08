import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
  
  sidebarItems: {label: string; link?: string, fun?:()=>void;}[] = [
    { label: 'Khuyến Maij', link: '/sale'},
    { label: 'Khách hàng', link: '/customer'},
    { label: 'Chiến dịch tiếp thị', link: '/marketing'},
    { label: 'Landing Page', link: '/landing'},
    { label: 'Logout', fun: ()=>{
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.reload();
    }},
   
  
  ]
  constructor(){}
  ngOnInit(): void {
   
  }
}
