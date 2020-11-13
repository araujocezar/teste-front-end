import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { environment } from 'src/environments/environment';
import { Videos } from '../interfaces/videos.interface';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() {
    this.registerBaseEndpoint(`${environment.api.endpoint}/`);
   }

  getVideos(searchString: string): Promise<AxiosResponse<Videos>> {
    const param = {
      part: environment.api.part,
      q: searchString,
      key: environment.api.key,
    };
    return axios.get('/search', {params: param});
  }

  getVideoDetail(videoId: string): Promise<AxiosResponse<Videos>> {
    const param = {
      part: environment.api.partDetail,
      id: videoId,
      key: environment.api.key,
    };
    return axios.get('/videos', { params: param });
  }

  private registerBaseEndpoint(endpoint: string) {
    axios.defaults.baseURL = endpoint;
  }
}
