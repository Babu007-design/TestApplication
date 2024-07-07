import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Nuts } from './nuts';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NutServiceService {
  model: Observable<Object> | undefined;

  constructor(private http : HttpClient) { }
  private url = 'http://localhost:3041/Products';

  getNutImages():Observable<any>{
    this.model = this.http.get(this.url);
    return this.model;
  }
  
  uploadImages(data:any):Observable<any>{
    this.model = this.http.post<any>(this.url,data);
    return this.model;
  }
}
