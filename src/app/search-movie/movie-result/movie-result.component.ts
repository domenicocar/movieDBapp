import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RootObject } from 'src/app/movieModel';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.css']
})
export class MovieResultComponent implements OnInit {

  movies: RootObject[] = [];
  moviesOrder: string = 'popularity';


  constructor(private service: DataServiceService, private activeRoute: ActivatedRoute, private orderPipe: OrderPipe, private _router: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      let nomeFilmSearch = params.get('nomeFilm')
    
      this.service.searchMovie(nomeFilmSearch)
        .subscribe(data => this.movies = data)

      this.orderPipe.transform(this.movies, this.moviesOrder)
    });
  }

  onSelect(movie, media_type) {

      if (media_type == "movie"){
        this._router.navigate(['/movie-detail', movie])
      } else {
        this._router.navigate(['/tv-detail', movie])
      }

  }
}