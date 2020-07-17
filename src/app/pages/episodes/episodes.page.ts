import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EpisodesService } from "../../services/episodes.service";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  Episode:any = [];

  constructor(
    private routeActive: ActivatedRoute,
    private epiService: EpisodesService
  ) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get('id');
    console.log(id);

    this.epiService.getEpisode(id).subscribe(epi => {
      console.log(epi);
      this.Episode = epi;
    });
  }

}
