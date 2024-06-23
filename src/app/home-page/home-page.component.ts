import { Component, OnInit } from '@angular/core';
import { NutServiceService } from '../nut-service.service';
import { Observable, sample } from 'rxjs';
import { Nuts } from '../nuts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ImageData: Object | undefined;
  public results: any;


  constructor(private imageservice :NutServiceService) { }

  ngOnInit(): void {
let obj = new Object();


     this.imageservice.getNutImages().subscribe(data => {
      this.results = data;

// for(let i=0;i<this.results){

// }

    this.ImageData = obj;
    console.log(this.results);
  })
  

  }
}
