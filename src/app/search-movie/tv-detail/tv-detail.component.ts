import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RootObjectTv } from 'src/app/movieModel';
import { Location } from '@angular/common';

@Component({

  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.css']

})

export class TvDetailComponent {
  
  activeId;
  movie : RootObjectTv[];
  correlati = [];
  url = 'https://www.youtube.com/embed/';
  isMobile = false;
  trailer = "Trailer"

  constructor(private service: DataServiceService, private activeRoute: ActivatedRoute, private _location: Location) { }


  ngOnInit() {

    this.activeRoute.paramMap.subscribe((params: ParamMap) => {

      let id = parseInt(params.get('id'));
      this.activeId = id;

      window.scroll(0, 0);

      this.service.getTVDetail(this.activeId)
        .subscribe(data => this.movie = data);


      if(window.innerWidth < 1250){
         this.isMobile = true;
      }
         
      this.service.getSimilarMovie(this.activeId)
        .subscribe(data => this.correlati = data);

    })

  }

  backClicked() {

    this._location.back()

  }

}
