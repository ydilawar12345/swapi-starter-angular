import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class SwapiService {
  swapiUrl = 'http://swapi.co/api/';

  constructor(private http: Http) {
  }

  getClimates() {
    return Observable.of([{name: 'arid'}, {name: 'Tropical'}]);
  }

  // getPeople() {
  //  return this.http.get(this.swapiUrl + 'planets/')
  //     .map((response: Response) => {
  //       const people = response.json().results;
  //       this.sorter.sort(people, 'name');
  //       return people;
  //     })
  //     .catch(this.handleError);
  // }
  getAllPlanets() {
    return Observable.forkJoin([this.getPlanetsPage(this.swapiUrl + 'planets/'),
      this.getPlanetsPage(this.swapiUrl + 'planets/?page=2'),
      this.getPlanetsPage(this.swapiUrl + 'planets/?page=3'),
      this.getPlanetsPage(this.swapiUrl + 'planets/?page=4'),
      this.getPlanetsPage(this.swapiUrl + 'planets/?page=5'),
      this.getPlanetsPage(this.swapiUrl + 'planets/?page=6'),
      this.getPlanetsPage(this.swapiUrl + 'planets/?page=7')]);
  }

  getPlanetsPage(url: string) {
    return this.http.get(url)
      .map((response: Response) => {
        const page = response.json();
        console.log(page);

        return page.results;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server Error!!');
  }
}
