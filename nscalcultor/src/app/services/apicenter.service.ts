import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { ratemodel } from '../Models/rate/cmlrate';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApicenterService {

  constructor(private http: HttpClient) { }

  //process api calls  All Data
  syncApi(ptUrl: string):Observable<ratemodel[]> {
    return this.http.get<ratemodel[]>(ptUrl);

  }

  //process api calls  One Data
  syncApiOne(ptUrl: string):Observable<ratemodel> {
    return this.http.get<ratemodel>(ptUrl);

  }

  //Prosess Json Api
  syncApiJson(ptUrl: string):Observable<ratemodel[]>{
    return this.http.get<ratemodel[]>(ptUrl);
  }

 

}
