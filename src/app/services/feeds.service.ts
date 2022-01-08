import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedElement } from '../models/feed-element.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
    apiUrl: string = 'https://private-anon-16140f77fe-technicaltaskapi.apiary-mock.com/feed?';
    page: number = 1;
    sport: string = 'football';

    constructor(private http: HttpClient) { }

    getFeedData(): Observable<FeedElement[]> {
      return this.http.get<FeedElement[]>(this.apiUrl + 'page='+this.page+'&sport='+this.sport);
    }

}