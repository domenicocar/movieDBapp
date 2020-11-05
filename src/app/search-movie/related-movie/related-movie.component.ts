import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-related-movie',
  templateUrl: './related-movie.component.html',
  styleUrls: ['./related-movie.component.css']
})
export class RelatedMovieComponent implements OnInit {

  @Input() movie;
  @Input() correlati;
 
  constructor(private _router: Router) { }

  ngOnInit() { 
  }

  onSelect(movie) {
    this._router.navigate(['/movie-detail', movie.id]);
  }

}
