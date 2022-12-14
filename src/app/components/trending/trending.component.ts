import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private ApiService: ApiService, private router: ActivatedRoute) { }

  trending_results: any;
  isMovie: boolean = true;
  loading: boolean = true;

  ngOnInit(): void {
    this.loading = true;
    this.router.params.subscribe((params: Params) => {
      this.isMovie = params['mediaType']==='movie' ? true : false;
      this.getTrendingLists(this.isMovie ? 'movie' : 'tv');
    });
  }

  getTrendingLists(type: string) {
    this.loading = true;
    
    if(type=='movie')
      this.isMovie=true;
    else
      this.isMovie=false;
      
    this.ApiService.getTrendingLists(type).subscribe({
      next: (res) => {
        this.trending_results = res.results;
        this.loading = false;
      },
      error: (err) => console.log(err)
    });
  }
}
