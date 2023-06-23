import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private apiUrl = 'https://stormy-shelf-93141.herokuapp.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(page: number, limit: number): Observable<any> {
    const url = `${this.apiUrl}?_page=${page}&_limit=${limit}`;
    return this.http.get<any>(url);
  }}
