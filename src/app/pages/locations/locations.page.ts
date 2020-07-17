import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LocationsService } from "../../services/locations.service";
import { CharactersService } from "../../services/characters.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  Location:any = [];

  constructor(
    private routeActive: ActivatedRoute,
    private locService: LocationsService,
    private charService: CharactersService
  ) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get('id');
    console.log(id);

    this.locService.getLocation(id).subscribe(loc => {
      console.log(loc);
      this.Location.residents = [];
      this.Location = loc;
      this.Location.residentsInfo = [];

      this.Location.residents.forEach(element => {
        this.charService.getCharacterByUrl(element).subscribe(res => {
          console.log(res);
          this.Location.residentsInfo.push(res);
          
        });
      });

    });
  }

}
