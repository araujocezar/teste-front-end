import { Item, Videos } from './../../interfaces/videos.interface';
import { VideosService } from './../../services/videos.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-detail',
  templateUrl: './videos-detail.component.html',
  styleUrls: ['./videos-detail.component.scss']
})
export class VideosDetailComponent implements OnInit {

  videoId: string;
  video: Videos;
  item: Item;
  urlSafe: SafeResourceUrl;
  url: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public videosService: VideosService,
    public sanitizer: DomSanitizer
  ) {
    this.videoId = this.activatedRoute.snapshot.params.id;
    this.url = `https://www.youtube.com/embed/${this.videoId}`;
  }

  async ngOnInit(): Promise<void> {
    await this.videosService.getVideoDetail(this.videoId).then((res) => this.video = res.data);
    this.item = this.video.items[0];
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  onClickBack() {
    window.history.back();
  }
}
