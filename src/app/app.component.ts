import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { SidenavService } from './service/SidenavService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //  constructor(private sidenavService: SidenavService) {}

  toggleSidenav() {
    //  this.sidenavService.toggle();
  }

  showFiller = false;

  ngOnInit(): void {
    //    	this.sidenavService.setSidenav(this.sidenav);
  }
}
