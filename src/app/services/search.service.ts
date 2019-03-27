import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) { }

  getSearchTagsArticles(searchTags: String) {
    return this.http.get(AppComponent.API_URL + '/getSearchTagsArticles', 
    {
      params: {
        'tags': searchTags
      }
    }).pipe(map((response: Response) => response.json()));
  }
}
