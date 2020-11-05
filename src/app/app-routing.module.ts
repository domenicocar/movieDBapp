import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './search-movie/movie-detail/movie-detail.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MovieResultComponent } from './search-movie/movie-result/movie-result.component';
import { PageNotFoundComponent } from './service-page/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TvDetailComponent } from './search-movie/tv-detail/tv-detail.component';


const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "movie-search", component: SearchMovieComponent},
  {path: "movie-result/:nomeFilm", component: MovieResultComponent},
  {path: "movie-detail/:id", component: MovieDetailComponent},
  {path: "tv-detail/:id", component: TvDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
