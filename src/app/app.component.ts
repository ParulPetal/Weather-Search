import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  country: string = '';
  city: string = '';
  info: any;
  API_KEY = "e1fa1058d81ff910c3bef4a951a0c038";
  httpdata: any;
  temp:any; 
  temp_max:any;
  temp_min:any;
  pressure:any;
  humidity:any;
  Show:boolean=true;
  main:object;
  
 constructor(private httpClient: HttpClient) { }

  onCountryKeyUp(event: any) {
    this.country = event.target.value;

  }
  onCityKeyUp(event: any) {
    this.city = event.target.value;
 }
getTemperature() {

    this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.API_KEY}&units=metric`)
      .subscribe((data) => { this.displaydata(data); }
      )
  }
  displaydata(data) {
  this.httpdata = data;

//console.log(this.httpdata);
  }

}