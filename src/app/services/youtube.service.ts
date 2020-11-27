import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private youtubeurl = 'https://www.googleapis.com/youtube/v3';
  private apiKey= 'AIzaSyBSXS3DJW63dewYndA11dCfg5Fv-YwTh8A';
  private playListid = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = 'CAUQAA';
  private maxResults = 10;
  constructor(private http: HttpClient) { }


  getDataVideos(){    
    const endpoint = `${this.youtubeurl}/playlistItems`;
    const params = new HttpParams()
    .set('part','snippet')
    .set('maxResults',`${this.maxResults}`)
    .set('playlistId',this.playListid)
    .set('key',this.apiKey);
    return this.http.get(endpoint, {params:params});
  }
}
