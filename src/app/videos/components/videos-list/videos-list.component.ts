import { VideosService } from './../../services/videos.service';
import { Component, HostListener, OnInit } from '@angular/core';
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
  processing: boolean;
  endPaginate: boolean;

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
    this.processing = true;
    this.endPaginate = false;
   }

  ngOnInit() {
    this.getVideos();
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    if (this.processing === false && this.endPaginate === false) {
      const target = $event.target.documentElement;
      const scrollPercent = ((target.clientHeight + target.scrollTop) / target.scrollHeight) * 100;

      if (scrollPercent > 95) {
        // this.movieService.getPopular(this.page).then((res) => this.insertFilms(res.data.results));
      }
    }
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
