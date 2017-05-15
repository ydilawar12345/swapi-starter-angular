import {Component, OnInit} from '@angular/core';
import {SwapiData} from '../swapi-data';
import {PlanetFilterObject} from '../pipes/planetFilterObject';
@Component({
  selector: 'app-swapi-people',
  templateUrl: './swapi-people.component.html',
  styleUrls: ['./swapi-people.component.css']
})

export class SwapiPeopleComponent implements OnInit {
  planets: any[] = [];
  climates = [];
  planetFilterObject: PlanetFilterObject;
  // planets2: any[] = [];
  selectedPerson: any;

  constructor(private swapiData: SwapiData) {
  }

  ngOnInit() {
    this.planets = this.swapiData.planets;
    this.climates = this.swapiData.climates;
    this.planetFilterObject = new PlanetFilterObject();
    // this.swapiData.planetsObservable.subscribe(data => this.planets2 = this.planets2.concat(data));
  }
}
