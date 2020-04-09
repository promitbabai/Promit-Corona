import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatMenuModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RankingsComponent } from './rankings/rankings.component';
import { MultiSeriesComponent } from './02_multi_series_line_chart/multi-series.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'graph', component: MultiSeriesComponent},
    {path: 'rankings', component: RankingsComponent}
  
  ];

@NgModule({
    declarations: [
        AppComponent,
        MultiSeriesComponent,
        HeaderComponent,
        RankingsComponent,
        HomeComponent

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        MatMenuModule,
        MatSidenavModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
