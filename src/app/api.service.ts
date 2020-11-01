import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public host:string="http://3iweb.org/apir/My_api";
  constructor(private http:HttpClient) { }

  public getRegions(){
      return this.http.get(this.host+"/liste_regions");
  }
  public getDepartements(){
    return this.http.get(this.host+"/liste_departements");
  }
}
