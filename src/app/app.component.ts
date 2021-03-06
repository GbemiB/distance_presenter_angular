import { Component } from '@angular/core';
import { LocationService } from './services/location-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //property to store response data
  locations: any = [];

  //Constructor. Inject LocationService
  constructor(private locationService: LocationService)
  {
  }

  ngOnInit()
  {
    //get location response from API
    this.locationService.getLocation().subscribe( (response: any) => {

      //assign response into 'locations' property
      this.locations = response;
    },
    (error: any) => {

      //show error details in browser console
      console.log(error);
    });
  }
}