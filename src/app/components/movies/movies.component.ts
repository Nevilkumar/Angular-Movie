import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {

  moviesList: any;
  searchStr: string = '';
  data: any;
  loading: boolean = true;
  flag: boolean = true;
  @ViewChild(MatPaginator) paginator: any;
  
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.loading=true;
    this.getMoviesList(1);
  }

  changePage(event: any) {
    this.loading=true;
    this.getMoviesList(event.pageIndex+1);
  }

  getMoviesList(page: number) {
    if(this.searchStr!=='')
    {
      if(this.flag)
      {
        this.flag = false;
        this.paginator.pageIndex = 0;
      }
      this.ApiService.getSearchResults(this.searchStr, page, 'movie').subscribe({
        next: (res) => {
          this.data = res;
          this.moviesList = res?.results;
          this.loading = false;
        },
        error: (err) => console.log(err)
      });
    }
    else
    {
      if(!this.flag)
      {
        this.flag = true;
        this.paginator.pageIndex = 0;
      }
      this.ApiService.getMoviesList(page).subscribe({
        next: (res) => {
          this.moviesList = res?.results;
          this.data=res;
          this.loading=false;
        },
        error: (err) => console.log(err)
      });
    }
  }

}
