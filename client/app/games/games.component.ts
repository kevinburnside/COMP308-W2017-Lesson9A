import { Component } from '@angular/core';
import { GamesService} from './games.service';

@Component({
    selector: 'games',
    template: '<router-outlet></router-outlet>',
    providers: [GamesService]
})
export class GamesComponent{}
