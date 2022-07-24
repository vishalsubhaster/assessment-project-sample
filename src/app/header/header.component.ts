import { Component, OnInit } from '@angular/core';
import { SidebarNavService } from '../services/sidebar-nav.service';

import { faBars,faGavel,faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  faGavel = faGavel;
  faUser = faUser;

  constructor(public sidebarNavService: SidebarNavService) { }

  ngOnInit(): void {
  }

}
