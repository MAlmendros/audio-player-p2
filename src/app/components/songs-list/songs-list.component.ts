import { Component, Input } from '@angular/core';
import { Song } from 'src/app/models/common.model';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent {
  @Input() songsList: Song[] = [];

  public filteredSongs: Song[] = [];

  constructor() { }

  ngOnChanges(): void {
    this.filteredSongs = this.songsList;
  }

  public showDetails(i: number) {
    this.filteredSongs[i].showDetails = !this.filteredSongs[i].showDetails;
  }
}
