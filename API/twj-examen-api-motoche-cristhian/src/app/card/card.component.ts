import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from 'app/models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:Card

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
  }

  saveCard(card){
    console.log(card);
    this._http
      .post('https://cristhianmotoche.mybluemix.net/card', card)
      .subscribe(
        (response) => {
          console.log("[RESPONSE]:", response);
        },
        (error) => {
          console.error("[ERROR]:", error);
        },
        () => {}
      )
  }

  deleteCard(card){
    this._http
      .delete('https://cristhianmotoche.mybluemix.net/card/delete?name=' + card.name)
      .subscribe(
        (response) => {
          console.log("[RESPONSE]:", response);
        },
        (error) => {
          console.error("[ERROR]:", error);
        },
        () => {}
      )
  }
}
