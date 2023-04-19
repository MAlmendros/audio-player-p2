import { Component } from '@angular/core';
import { Song } from './models/common.model';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'AUDIO PLAYER';

  public songsList: Song[] = [];

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.songsList = this.service.getSongsList();
  }
}
