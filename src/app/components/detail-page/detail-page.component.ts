import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailPageComponent implements OnInit {

  currentId:any;
  mediaType:any;
  currentData:any;
  backdropImages:any = [];
  videos:any;
  originalImageUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor(private router: ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.mediaType = params['mediaType'];
      this.currentId = params['id'];
    })
    this.getSingleMoviesDetails();
    this.getBackdropsImages();
    this.getVideos();
  }

  getSingleMoviesDetails(){
    this.ApiService.getMovieOrSeries(this.currentId, this.mediaType).subscribe({
      next: (res) => {
        this.currentData=res;
      },
      error: (err) => console.log(err)
    });
  }

  getVideos(){
    this.ApiService.getVideos(this.currentId, this.mediaType).subscribe({
      next: (res) => {
        this.videos = res.results.slice(0, 16);
      },
      error: (err) => console.log(err)
    });
  }

  getBackdropsImages(){
    this.ApiService.getBackdropsImages(this.currentId, this.mediaType).subscribe({
      next: (res) => {
        this.backdropImages = res.backdrops.slice(0, 16);
      },
      error: (err) => console.log(err)
    })
  }

}
