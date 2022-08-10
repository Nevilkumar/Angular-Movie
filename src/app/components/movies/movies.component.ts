import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {

  moviesList: any;
  isMovie: boolean = true;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getMoviesList(1);
  }

  changePage(event: any) {
    this.getMoviesList(event.pageIndex+1);
  }

  getMoviesList(page: number) {
    this.ApiService.getMoviesList(page).subscribe({
      next: (res) => {
        this.moviesList = res?.results;
      },
      error: (err) => console.log(err)
    })
  }
}
