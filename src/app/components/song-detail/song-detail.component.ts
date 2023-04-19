import { Component, Input } from '@angular/core';
import {Song} from 'src/app/models/common.model';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent {
  @Input() song: Song = {} as Song;

  constructor() { }
}

