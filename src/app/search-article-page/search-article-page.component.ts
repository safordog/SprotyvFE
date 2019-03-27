import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Article } from '../model/model.article';

@Component({
  selector: 'app-search-article-page',
  templateUrl: './search-article-page.component.html',
  styleUrls: ['./search-article-page.component.css']
})
export class SearchArticlePageComponent implements OnInit {

  searchTags: String = "";
  articles: Article[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(value) {
    this.searchTags = value;
    this.searchService.getSearchTagsArticles(this.searchTags.toLowerCase())
    .subscribe((article: Article[]) => {
      this.articles = article;
    });
  }

}
