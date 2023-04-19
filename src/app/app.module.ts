import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SongDetailComponent,
    SongsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
