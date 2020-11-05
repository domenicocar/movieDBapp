import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { RootObject } from '../movieModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent implements OnInit, AfterViewInit {

  movies: RootObject[] = [];
  select = 1;
  @ViewChild('nomefilm', { static: false }) elementNameDOM: ElementRef;

  constructor(private service: DataServiceService, private _router: Router) { }

  ngAfterViewInit() {
    this.elementNameDOM.nativeElement.focus()
  }

  ngOnInit() {
  }

  cercaFilm(titolo) {
      this.service.searchMovie(titolo)
        .subscribe(data => this.movies = data)
      this._router.navigate(['/movie-result', titolo]);
  }
}

