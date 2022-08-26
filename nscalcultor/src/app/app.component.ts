import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MediaObserver } from '@angular/flex-layout';
import { MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { ConnectapiService } from './services/connectapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'nscalcultor';

  constructor() {
    type HttRespone = {code:number,data:string};
    console.log('Inside subscriber..');
  }

  caldata:  {[key:string]:any} = {};
  nUserID:number = 0;
  nTitle:number = 0;
  tBody:string = "";
 
}
