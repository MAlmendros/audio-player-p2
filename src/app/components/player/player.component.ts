import { Component, Input, OnChanges } from '@angular/core';
import { Song } from 'src/app/models/common.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnChanges {
  @Input() song: Song = {} as Song;

  public showPlayer: boolean = false;

  public imageUrl: string = "";
  
  constructor() {
    this.imageUrl = "../../assets/img/image.png";
  }

  public ngOnChanges(): void {
    if (this.song && this.song.id) {
      this.playSong();
    }
  }

  public pauseSong(): void {
    console.log('pauseSong');
  }

  public playSong(): void {
    console.log('playSong');
    this.showPlayer = true;
  }

  public stopSong(): void {
    console.log('stopSong');
    this.showPlayer = false;
  }
}
