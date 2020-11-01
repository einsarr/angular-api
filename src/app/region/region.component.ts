import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  public listeregions;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.listeRegions();
  }

  public listeRegions() {
    this.apiService.getRegions()
      .subscribe(data=>{
        this.listeregions=data;
      },error => {
        console.log(error);
      });
  }

}
