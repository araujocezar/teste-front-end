import { Component, Input, OnInit } from '@angular/core';
import { Item, Videos } from '../../interfaces/videos.interface';

@Component({
  selector: 'app-videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.scss']
})
export class VideosCardComponent implements OnInit {

  @Input() video: Item;

  constructor() { }

  ngOnInit(): void {
  }
  onClickDetail() {
  }

}
