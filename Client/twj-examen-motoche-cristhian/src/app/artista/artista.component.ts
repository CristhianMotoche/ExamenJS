import { Component, OnInit, Input } from '@angular/core';

import { Artista } from 'app/Model/Artista';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  @Input() artista:Artista

  constructor() { }

  ngOnInit() {
  }
}
