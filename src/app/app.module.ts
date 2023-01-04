import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './recipe/list.component';
import { ListItemComponent } from './recipe/list-item.component';
import { DetailComponent } from './recipe/detail.component';
import { ListEditComponent } from './shopping/list-edit.component';
import { HeaderComponent } from './header/header.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    DetailComponent,
    ListEditComponent,
    HeaderComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
