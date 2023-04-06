import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  apiurl = 'https://api.postalpincode.in/pincode/';

  constructor(private httpClient: HttpClient) { }

  getPinCodeDetail(id: number): Observable<Data>{
    return this.httpClient.get<Data>(this.apiurl);
  }
}
