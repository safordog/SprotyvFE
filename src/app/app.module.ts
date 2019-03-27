import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './services/article.service';
import { ArticlePageComponent } from './article-page/article-page.component';
import { SearchArticlePageComponent } from './search-article-page/search-article-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { UserService } from './services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { UrlPermission } from './urlPermission/url.permission';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    ArticlePageComponent,
    SearchArticlePageComponent,
    RegPageComponent,
    AuthPageComponent,
    ProfileComponent,
    AnalyticsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [ArticleService, UserService, UrlPermission, AccountService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
