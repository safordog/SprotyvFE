import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: Http) { }

  getLastArticles() {
    return this.http.get(AppComponent.API_URL + '/getLastArticles' 
    ).pipe(map((response: Response) => response.json()));
  }
}
