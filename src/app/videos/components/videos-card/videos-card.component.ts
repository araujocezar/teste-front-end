import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item, Videos } from '../../interfaces/videos.interface';

@Component({
  selector: 'app-videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.scss']
})
export class VideosCardComponent implements OnInit {

  @Input() video: Item;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  onClickDetail() {
    this.router.navigate([`/${this.video.id.videoId}`]);

  }

}
