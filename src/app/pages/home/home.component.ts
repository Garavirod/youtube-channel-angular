import { YoutubeService } from './../../services/youtube.service';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Video [] = [];
  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getDataVideos()
    .subscribe(res=>{
      this.videos.push( ...res );
      console.log(this.videos);
      
    })
  }

}
