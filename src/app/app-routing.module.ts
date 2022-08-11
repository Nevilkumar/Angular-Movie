import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TvComponent } from './components/tv/tv.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'tv', component: TvComponent},
  {path: '', redirectTo: 'trending/movie', pathMatch: 'full'},
  {path: 'trending/:mediaType', component: TrendingComponent},
  {path: ':mediaType/:id', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
