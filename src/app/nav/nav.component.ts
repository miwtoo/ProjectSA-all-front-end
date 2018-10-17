import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../service/sidenav/sidenav.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() title = ""
  name = this.userService.getUserName()
  

  logout(){
    this.router.navigate(['login']);
    localStorage.removeItem("user");
  }
  constructor(private router: Router, private userService : UserService, private sidenav :SidenavService) { }

  ngOnInit() {
  }

}
