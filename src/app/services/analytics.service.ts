import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: Http) { }

  getCountAndDateArticles() {
    return this.http.get(AppComponent.API_URL + '/getCountAndDateArticles')
    .pipe(map((response: Response) => response.json()));
  }
}
