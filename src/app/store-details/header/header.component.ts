import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.components.css',
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  ngOnInit(): void {

  }
  SideNavToggled(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}
