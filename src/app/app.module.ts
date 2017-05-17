import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SwapiPlanetsComponent } from './swapi-planets/swapi-planets';
import { SwapiService } from './swapi.service';
import { SwapiData } from './swapi-data';
import {PlanetPipe} from './pipes/planet.pipe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/empty';
// import { SwapiService } from '../../node_modules/ng2-swapi';


@NgModule({
  declarations: [
    AppComponent,
    SwapiPlanetsComponent,
    PlanetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SwapiService, SwapiData],
  bootstrap: [AppComponent]
})
export class AppModule { }
