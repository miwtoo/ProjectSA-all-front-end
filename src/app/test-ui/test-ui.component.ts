import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../service/sidenav/sidenav.service';

@Component({
  selector: 'app-test-ui',
  templateUrl: './test-ui.component.html',
  styleUrls: ['./test-ui.component.css']
})
export class TestUiComponent implements OnInit {
  title = "Test UI"
  constructor() { }

  ngOnInit() {
  }

}
