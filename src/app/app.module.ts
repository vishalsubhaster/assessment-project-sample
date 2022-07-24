import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared-components/card/card.component';
import { CircularProgressBarComponent } from './shared-components/circular-progress-bar/circular-progress-bar.component';
import { DonutChartComponent } from './shared-components/charts/donut-chart/donut-chart.component';
import { HorizontalStackedChartComponent } from './shared-components/charts/horizontal-stacked-chart/horizontal-stacked-chart.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

/* Routes are defined in app module itself rather than in app routing module because we have only few routes now */
const appRoutes: Routes = [ 
  { path: '' , component: HomePageComponent },
  { path: 'page-2', component: PageTwoComponent },
  { path: 'page-3', component: PageThreeComponent},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'}  
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CardComponent,
    CircularProgressBarComponent,
    DonutChartComponent,
    HorizontalStackedChartComponent,
    HomePageComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
