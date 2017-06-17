import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Movie } from 'app/models/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies:Movie[] = []

  constructor(private _http: Http){ }

  ngOnInit(){
    this.loadMovies()
  }

  loadMovies() {
    this._http
      .get("http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage")
      .subscribe(
        (response) => {
          let moviesResponse = response.json();
          moviesResponse.map((movie) => movie.show_cast = movie.show_cast.split(","));
          moviesResponse.map((movie) => {
            if(movie.poster === null || movie.poster === undefined) {
              movie.poster = '/assets/no-image.png'
            }
          });
          this.movies = moviesResponse;
        },
        (error) => { console.log(error); },
        () => {}
      )
  }
}
