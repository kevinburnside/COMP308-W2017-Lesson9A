// angular crap
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions} from '@angular/http';
// components
import { AppComponent } from './app.component';

// Routers
import { AppRoutes } from './app.routes';

// Subcomponents
import { GamesModule } from './games/games.module';

@NgModule({
  imports:      [BrowserModule, HttpModule, FormsModule, GamesModule, RouterModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
