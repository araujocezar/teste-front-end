import { VideosService } from './../../services/videos.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Item, Videos } from '../../interfaces/videos.interface';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {
  formSearch: FormGroup;
  items: Item[];
  load: boolean;
  processing: boolean;
  endPaginate: boolean;
  pageToken: string;
  stringSearch: any;
  videosList: boolean;

  constructor(
    formBuilder: FormBuilder,
    public videosService: VideosService

  ) {
    this.formSearch = formBuilder.group({
      stringSeach: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        this.descricaoVaziaValidator
      ])]
    });
    this.load = false;
    this.items = [];
    this.processing = true;
    this.endPaginate = false;
    this.videosList = true;
   }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    if (this.processing === false && this.endPaginate === false) {
      const target = $event.target.documentElement;
      const scrollPercent = ((target.clientHeight + target.scrollTop) / target.scrollHeight) * 100;

      if (scrollPercent > 95) {
        this.videosService.getVideos(this.stringSearch, this.pageToken).then((res) => this.insertFilms(res.data.items, res.data));
      }
    }
  }

  public descricaoVaziaValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'espaco-branco': true };
  }

  async getVideos(searchString: string) {
    this.videosService.getVideos(searchString).then((res) => this.insertFilms(res.data.items, res.data));
  }

  onClickSearch() {
    this.items = [];
    this.stringSearch = this.formSearch.controls.stringSeach.value;
    this.stringSearch = this.stringSearch.replaceAll(' ', '+');
    this.getVideos(this.stringSearch);
  }

  insertFilms(item: Item[], data) {
    this.pageToken = data.nextPageToken;
    if (this.items.length > 0) {
      this.items.push(...item);
    } else {
      this.items = item;
    }
    if (data.pageInfo.totalResults === 0) {
      this.videosList = false;
    } else {
      this.videosList = true;
    }
    this.processing = false;

    if (item.length === 0) {
      this.endPaginate = true;
    }
  }

}
