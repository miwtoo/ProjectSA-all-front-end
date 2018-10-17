import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '../service/sidenav/sidenav.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private router: Router, private sidenavService: SidenavService) {
   }
  
  ngOnInit() {
    this.router.navigate(["all/test"]);
    this.sidenavService.setSidenav(this.sidenav);
  }

}
