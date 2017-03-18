import { Routes } from '@angular/router';

// top level
import { GamesComponent } from './games.component';

// sub component
import { ListComponent } from './list/list.component';

export const GamesRoutes: Routes = [{
    path: 'api',
    component: GamesComponent,
    children: [
        {path: '/games', component: ListComponent}
    ]
}];
