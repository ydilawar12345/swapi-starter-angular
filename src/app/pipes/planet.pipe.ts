/**
 * Created by user on 5/15/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';
import {PlanetFilterObject} from './planetFilterObject';

@Pipe({
  name: 'planetPipe',
  pure: false
})

export class PlanetPipe implements PipeTransform {
  transform(planets: any[], filter: PlanetFilterObject): any {
    if (!planets || !filter) {
      return planets;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return planets.filter(planet => planet.terrain.indexOf(filter.terrain) !== -1 && planet.climate.indexOf(filter.climate) !== -1);
  }
}
