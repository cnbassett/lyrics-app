import { Component, OnInit } from '@angular/core';
import { LyricsApiService } from "./services/lyrics-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  header = "Chris Bassett's Music App";
  title = "Amazing Grace";
  artist = "";
  lyrics: String[];

  constructor(private lyricsApiService: LyricsApiService) {}

  getLyrics(): void {
    this.lyrics = this.lyricsApiService.getLyrics(this.title, this.artist);
    //console.log(this.lyrics);
  }

  getNewLyrics(newTitle, newArtist): void {
    this.title = newTitle;
    this.artist = newArtist;
    this.getLyrics();
  }

  ngOnInit() {
    this.getLyrics();
  }
}

