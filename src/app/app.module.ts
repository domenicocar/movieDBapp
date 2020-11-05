import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MovieDetailComponent } from './search-movie/movie-detail/movie-detail.component';
import { MovieResultComponent } from './search-movie/movie-result/movie-result.component';
import { OrderModule } from 'ngx-order-pipe';
import { PageNotFoundComponent } from './service-page/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SafePipe } from './search-movie/safePipe';
import { TvDetailComponent } from './search-movie/tv-detail/tv-detail.component';
import { RelatedMovieComponent } from './search-movie/related-movie/related-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent,
    MovieDetailComponent,
    MovieResultComponent,
    PageNotFoundComponent,
    HomeComponent,
    SafePipe,
    TvDetailComponent,
    RelatedMovieComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    MaterialModule,

  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
