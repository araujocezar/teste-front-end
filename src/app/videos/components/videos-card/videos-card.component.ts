import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.scss']
})
export class VideosCardComponent implements OnInit {

  @Input() video: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.video);
  }

}
