import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  main_url = 'https://api.themoviedb.org/3';
  api_key = '3f66b57e468e104429e647efd009c6d5';
  trending_movie_url = `${this.main_url}/trending/movie/day?api_key=${this.api_key}&adult=true`;

  trending_tv_url = `${this.main_url}/trending/tv/day?api_key=${this.api_key}&adult=true`;

  constructor(private http: HttpClient) { }

  getTrendingLists(type: string){
    if(type=='movie')
      return this.http.get<any>(this.trending_movie_url);
    else
      return this.http.get<any>(this.trending_tv_url);
  }

  getMovieOrSeries(id: string, mediaType: string): Observable<any> {
    return this.http.get(`${this.main_url}/${mediaType}/${id}?api_key=${this.api_key}`);
  }
}
