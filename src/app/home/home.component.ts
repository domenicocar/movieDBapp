import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { Trend } from '../movieModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trend : Trend[] = [];
  moviesOrder: string = 'popularity';

  constructor(private _service : DataServiceService, private _router: Router, private orderPipe: OrderPipe){}
  
  ngOnInit(){
    this._service.getTrend().subscribe(data => this.trend = data)
    this.orderPipe.transform(this.trend,this.moviesOrder)
  }

  onSelect(movie){
    this._router.navigate(['/movie-detail', movie.id]);
  }
}
