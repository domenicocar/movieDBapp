import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject, Trend, RootObjectVideo, ResultVideo, MovieModel, RootObjectTv } from './movieModel';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _apiKey = 'cb5397db539f5f8cafc96f3c038bcbd3';


  constructor(private _http: HttpClient) { }
/*
  searchMovie(movie): Observable<RootObject[]> {
    return this._http.get<RootObject[]>('https://api.themoviedb.org/3/search/movie?api_key=' + this._apiKey + '&query=' + movie)
  }
*/
  searchMovie(movie): Observable<RootObject[]> {
    return this._http.get<RootObject[]>('https://api.themoviedb.org/3/search/multi?api_key=cb5397db539f5f8cafc96f3c038bcbd3&language=en-US&query='+ movie +'&page=1&include_adult=false')
  }

  getMovieDetail(movie_id) {
    return this._http.get<RootObject[]>('https://api.themoviedb.org/3/movie/' + movie_id + '?api_key=' + this._apiKey)
  }

  getTVDetail(movie_id) {
    return this._http.get<RootObjectTv[]>('https://api.themoviedb.org/3/tv/'+ movie_id +'?api_key='+ this._apiKey +'&language=en-US')
  }

  getTrend() {
    return this._http.get<Trend[]>('https://api.themoviedb.org/3/trending/movie/day?api_key=' + this._apiKey)
  }

  getSimilarMovie(movie_id) {
    return this._http.get<RootObject[]>('https://api.themoviedb.org/3/movie/' + movie_id + '/similar?api_key=' + this._apiKey)
  }

  getVideoId(movie_id) {
    return this._http.get<ResultVideo[]>('https://api.themoviedb.org/3/movie/' + movie_id + '/videos?api_key=cb5397db539f5f8cafc96f3c038bcbd3')
  }
  
}
