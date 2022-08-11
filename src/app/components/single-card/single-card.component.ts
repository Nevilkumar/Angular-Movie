import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {

  @Input() item: any;
  @Input() isMovie: boolean = true;

  image_main_url: string = 'https://image.tmdb.org/t/p/w300';
  constructor() {
   }

  ngOnInit(): void {
  }

}
