import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos-detail',
  templateUrl: './videos-detail.component.html',
  styleUrls: ['./videos-detail.component.scss']
})
export class VideosDetailComponent implements OnInit {

  videoId: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.videoId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }
  onClick() {
  }
}
