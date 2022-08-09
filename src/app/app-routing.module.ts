import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { TrendingComponent } from './components/trending/trending.component';

const routes: Routes = [
  {path: '', redirectTo: 'trending/movie', pathMatch: 'full'},
  {path: 'trending/:mediaType', component: TrendingComponent},
  {path: ':mediaType/:id', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
