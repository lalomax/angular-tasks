import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h1>Los juegos favoritos de {{userName}}</h1>
    <ul>
      @for(game of games; track game.id) {
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
@Input() userName = '';
@Output() addFavoriteEvent = new EventEmitter<string>();

fav(gameName : string) {
  // alert(`A ${this.userName} le gusta jugar a ${gameName}`)
  this.addFavoriteEvent.emit(gameName)
}

  games = [
    {
      id : 1,
      name : "Atari 26000"
    },
    {
      id : 2,
      name : "Pac Man"
    },
    {
      id : 3,
      name : "Enduro"
    }
  ]

}
