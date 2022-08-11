import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  main_url = 'https://api.themoviedb.org/3';
  api_key = '3f66b57e468e104429e647efd009c6d5';
  language = 'en-US';
  
  constructor(private http: HttpClient) { }

  getTrendingLists(type: string){
    if(type=='movie')
      return this.http.get<any>(`${this.main_url}/trending/movie/day?api_key=${this.api_key}`);
    else
      return this.http.get<any>(`${this.main_url}/trending/tv/day?api_key=${this.api_key}`);
  }

  getMovieOrSeries(id: string, mediaType: string): Observable<any> {
    return this.http.get(`${this.main_url}/${mediaType}/${id}?api_key=${this.api_key}`);
  }

  getBackdropsImages(id: string, mediaType: string) : Observable<any> {
    return this.http.get(`${this.main_url}/${mediaType}/${id}/images?api_key=${this.api_key}`);
  }

  getVideos(id: string, mediaType: string): Observable<any> {
    return this.http.get(`${this.main_url}/${mediaType}/${id}/videos?api_key=${this.api_key}`);
  }

  getSearchResults(searchStr: string, page: number, mediaType: string): Observable<any> {
    return this.http.get(`${this.main_url}/search/${mediaType}?api_key=${this.api_key}&language=en-US&query=${searchStr}&page=${page}`);
  }

  getMoviesList(page: number) : Observable<any> {
    return this.http.get(`${this.main_url}/discover/movie?api_key=${this.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
  }

  getTVsList(page: number) : Observable<any> {
    return this.http.get(`${this.main_url}/discover/tv?api_key=${this.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
  }
}

