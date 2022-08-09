import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  currentId:any;
  mediaType:any;
  currentData:any;
  originalImageUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor(private router: ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.mediaType = params['mediaType'];
      this.currentId = params['id'];
    })
    this.getSingleMoviesDetails();
  }

  getSingleMoviesDetails(){
    this.ApiService.getMovieOrSeries(this.currentId, this.mediaType).subscribe({
      next: (res) => {
        this.currentData=res;
        console.log(this.currentData)
      },
      error: (err) => console.log(err)
    });
  }

}
