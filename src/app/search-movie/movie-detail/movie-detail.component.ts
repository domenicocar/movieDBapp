import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ResultVideo } from 'src/app/movieModel';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {


  activeId;
  movie = [];
  correlati = [];
  private videos: any = [];
  url = 'https://www.youtube.com/embed/';
  isMobile = false;
  trailer = "Trailer"


  constructor(private service: DataServiceService, private activeRoute: ActivatedRoute, private _router: Router, private _location: Location) { }


  ngOnInit() {


    this.activeRoute.paramMap.subscribe((params: ParamMap) => {

      let id = parseInt(params.get('id'));
      this.activeId = id;

      window.scroll(0, 0);

      this.service.getMovieDetail(this.activeId)
        .subscribe(data => this.movie = data);

        if(window.innerWidth < 1250){
          this.isMobile = true;
        }
         
      this.service.getSimilarMovie(this.activeId)
        .subscribe(data => this.correlati = data);

        this.videoTrailer()

    })
    

  }

  videoTrailer(){
      this.service.getVideoId(this.activeId)
       .subscribe((data : any)  => {
         this.videos = data['results'].filter(r => r.type.includes("Trailer"))
        // console.log(this.videos[0].key)
        this.url = this.url + this.videos[0].key

        }); 
  }
  

  backClicked() {
    this._location.back()

  }

  onSelect(movie) {
    this._router.navigate(['/movie-detail', movie.id]);
  }

}
