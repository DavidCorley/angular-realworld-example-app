import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article, User, Company, PostUser } from '../models';

import { map } from 'rxjs/operators/map';

@Injectable()
export class CompeatService {
  private compeatApi: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.compeatApi + 'users');
  }

  getUserPosts(userId: number): Observable<any> {
    return this.http.get(this.compeatApi + "posts?userId=" + userId);
  }
}
