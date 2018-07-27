import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LyricsApiService {
  private apiKey = "&apikey=6fe70e260c5f3779299e6aea377dc7d1";
  private lyricsUrlTrackSearch = "http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=";
  private lyricsUrlTrackID = "http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=";
  private trackID = "";
  
  getLyrics(title, artist): String[] {
    let lyrics: String[] = [""];
    let getIDUrl = this.lyricsUrlTrackSearch + title + " " + artist + this.apiKey;
    let getLyricsUrl = "";

   this.http.get(getIDUrl).subscribe(data => {
      //console.log(data);
      if(data['message'].header.available != 0){
          this.trackID = data['message'].body.track_list[0].track.track_id;
          //console.log(this.trackID);
        

        getLyricsUrl = this.lyricsUrlTrackID + this.trackID + this.apiKey;
        
        this.http.get(getLyricsUrl).subscribe(data2 => {
          //console.log(data2);
          if(data2['message'].header.status_code == 200){
            lyrics[0] = data2['message'].body.lyrics.lyrics_body;
          }
        
        });
      }
    });
    return lyrics;
   
  }

  constructor(private http: HttpClient) { }
}
