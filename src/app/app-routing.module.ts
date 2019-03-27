import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlePageComponent } from './article-page/article-page.component';
import { SearchArticlePageComponent } from './search-article-page/search-article-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ProfileComponent } from './profile/profile.component';
import { UrlPermission } from './urlPermission/url.permission';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: ArticlePageComponent },
  { path: 'analytics', component: AnalyticsPageComponent },
  { path: 'search', component: SearchArticlePageComponent },
  { path: 'registration', component: RegPageComponent },
  { path: 'authorization', component: AuthPageComponent },
  { path: 'profile', component: ProfileComponent ,canActivate: [UrlPermission] },
  { path: '**', redirectTo: '/authorization' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
