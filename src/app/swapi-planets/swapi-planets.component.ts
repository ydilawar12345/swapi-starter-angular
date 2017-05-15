import {Component, OnInit} from '@angular/core';
import {SwapiData} from '../swapi-data';
import {PlanetFilterObject} from '../pipes/planetFilterObject';
@Component({
  selector: 'app-swapi-planets',
  templateUrl: './swapi-planets.component.html',
  styleUrls: ['./swapi-planets.component.css']
})

export class SwapiPlanetsComponent implements OnInit {
  planets: any[] = [];
  climates: String[] = [];
  terrains: any[] = [];
  planetFilterObject: PlanetFilterObject;
  // planets2: any[] = [];
  selectedPlanet
  constructor(private swapiData: SwapiData) {
  }

  ngOnInit() {
    this.planets = this.swapiData.planets;
    this.climates = this.swapiData.climates;
    this.terrains = this.swapiData.terrains;
    this.planetFilterObject = new PlanetFilterObject();
    // this.swapiData.planetsObservable.subscribe(data => this.planets2 = this.planets2.concat(data));
  }
}
