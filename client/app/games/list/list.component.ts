import { Component } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
    selector: 'list',
    templateUrl: 'list.template.html'
})
export class ListComponent{
    games: any;
    errorMEssage: string;

    constructor(private _gamesService: GamesService){
    }

    ngOnInit(){
        this._gamesService.list().subscribe(games => this.games = games);
    }
}