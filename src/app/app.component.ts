import { Component } from '@angular/core';
import { SimpleDataModel } from './models/charts.model';
import { SidebarNavService } from './services/sidebar-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment-project';


  constructor(public sidebarNavService: SidebarNavService) { }

}
