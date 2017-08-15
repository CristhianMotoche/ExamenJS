import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Card } from 'app/models/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards:Card[] = []

  constructor(private _http: Http){ }

  ngOnInit(){
    this.loadCards()
  }

  loadCards() {
    this._http
      .get("http://yugiohprices.com/api/top_100_cards")
      .subscribe(
        (response) => {
          let cardsResponse = response.json().data;
          this.cards = cardsResponse;
        },
        (error) => { console.log(error); },
        () => {}
      )
  }

  getDataBluemix(){
    this._http
      .get("https://cristhianmotoche.mybluemix.net/cards")
      .subscribe(
        (response) => {
          let cardsResponse = response.json();
          this.cards = cardsResponse;
        },
        (error) => { console.log(error); },
        () => {}
      )
  }
}
