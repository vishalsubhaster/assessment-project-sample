import { Component, OnInit } from '@angular/core';
import { SidebarNavService } from '../services/sidebar-nav.service';
import { faHome,faBriefcase,faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  /* Icons used */
  faHome = faHome;
  faBriefCase = faBriefcase;
  faCalendar = faCalendar;


  constructor(public sidebarNavService: SidebarNavService) { }

  ngOnInit(): void {
  }

}
