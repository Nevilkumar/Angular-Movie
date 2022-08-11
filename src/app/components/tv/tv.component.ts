import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TvComponent implements OnInit {

  moviesList: any;
  data: any;
  searchStr: string = '';
  loading: boolean = true;
  flag: boolean = true;
  @ViewChild(MatPaginator) paginator: any;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.loading=true;
    this.getTVsList(1);
  }

  changePage(event: any) {
    this.loading = true;
    this.getTVsList(event?.pageIndex+1);
  }

  getTVsList(page: number) {
    if(this.searchStr!=='')
    {
      if(this.flag)
      {
        this.flag = false;
        this.paginator.pageIndex = 0;
      }
      this.ApiService.getSearchResults(this.searchStr, page, 'tv').subscribe({
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
      this.ApiService.getTVsList(page).subscribe({
        next: (res) => {
          this.moviesList = res?.results;
          this.data = res;
          this.loading = false;
        },
        error: (err) => console.log(err)
      });
    }
  }

}
