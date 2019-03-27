import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../model/model.article';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService
    .getLastArticles()
    .subscribe((article: Article[]) => {
      this.articles = article;
    });
    this.setIntervalGettingArticles();
  }

  setIntervalGettingArticles(): void {
      setInterval(() => {
        this.articleService
        .getLastArticles()
        .subscribe((article: Article[]) => {
        this.articles = article;
      });
      }, 60 * 1000);
  }

}
