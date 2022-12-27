import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  searchUrl ="  https://youtube.googleapis.com/youtube/v3/search";
  myApiKey:string = "AIzaSyBt5mi2kLI4bsPANc_LFl44m84qLY5Ie9s";
  
  constructor(private http:HttpClient) { } 

 searchVideos(queryString:string){
  return this.http.get(`https://youtube.googleapis.com/youtube/v3/search?q=${queryString}&key=${this.myApiKey}`);
 }
}