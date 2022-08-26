import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataapi } from '../Models/cmlapi';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectapiService {

  aoDataapi: dataapi[] = [];

  constructor(private http: HttpClient) { }

  syncApi()
   {
    this.http.get<dataapi[]>("https://jsonplaceholder.typicode.com/posts/1").subscribe(
      response=>{
       this.aoDataapi = response;
      }
    );    //Rx js control asyncData
  }

  syncData()
  {
    this.http.get<dataapi[]>("https://jsonplaceholder.typicode.com/posts/1").subscribe(
      response=>{
        this.aoDataapi = response;
      }
    );    //Rx js control asyncData
  }



  resetData(){
    this.aoDataapi = [];
  }



}
