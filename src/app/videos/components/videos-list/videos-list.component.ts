import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Videos } from '../../interfaces/videos.interface';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {
  formSearch: FormGroup;
  videos: Videos;
  load: boolean;

  constructor(
    formBuilder: FormBuilder,
    public videosService: VideosService

  ) {
    this.formSearch = formBuilder.group({
      stringSeach: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])]
    });
    this.load = false;
   }

  ngOnInit() {
    this.getVideos();
  }

  async getVideos() {
    const result = await this.videosService.getVideos('teste');
    this.insertVideos(result.data);
  }

  insertVideos(result) {
    this.videos = result;
    this.load = true;
  }

  onClickSearch() {
    let search = this.formSearch.controls.stringSeach.value;
    search = search.replaceAll(' ', '+');
    console.log(search);
  }

}
