import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  public listedepartements;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.listeDepartements();
  }


  public listeDepartements() {
    this.apiService.getDepartements()
      .subscribe(data=>{
        this.listedepartements=data;
      },error => {
        console.log(error);
      });
  }
}
