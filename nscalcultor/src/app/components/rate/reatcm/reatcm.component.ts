import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from 'src/app/services/globalservice.service';
import { ratemodel } from 'src/app/Models/rate/cmlrate';
import { Classrate } from 'src/app/class/classrate';
import { HttpClient } from '@angular/common/http';
import { ApicenterService } from 'src/app/services/apicenter.service';
import { from, Observable } from 'rxjs';


@Component({
  selector: 'app-reatcm',
  templateUrl: './reatcm.component.html',
  styleUrls: ['./reatcm.component.scss']
})
export class ReatcmComponent implements OnInit {

  oList:ratemodel[] = [];
  oResult: ratemodel[] = [];

  tUrl: string = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';
  //tUrl: string = 'https://localhost:5000/api/users';
  constructor(private oApi:ApicenterService) { }
  tDate:string = '';

  ngOnInit(): void {
    
  }


  getApiService(): void 
  {
    
    this.oApi.syncApi(this.tUrl).subscribe(
      (response:ratemodel[]) => this.oList = response,
      (error:any) => console.log(error),
      () => console.log('Done retrieving users'),
    );
     


  
  }

  resetData(){
    
  }

}
