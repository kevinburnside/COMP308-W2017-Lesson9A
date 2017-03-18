import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//top level component
import { GamesRoutes } from './games.routes';
import { GamesComponent } from './games.component';

//sub components


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(GamesRoutes)
    ],
    declarations:[
        GamesComponent
    ]
})
export class GamesModule{}