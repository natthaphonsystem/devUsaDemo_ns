import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ratemodel } from '../Models/rate/cmlrate';
import { ReatcmComponent } from '../components/rate/reatcm/reatcm.component';
import { Classrate } from '../class/classrate';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  public aoRateList: ratemodel[] = [];
  oRate = new Classrate;


  tUrl: string = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';
  constructor(private http: HttpClient) { }
  
  syncApirate()
  {
    this.http.get<ratemodel[]>(this.tUrl).subscribe(
      response => {
        this.aoRateList = response;
       // return response;
      }
   );
  }


}
