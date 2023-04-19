import { Injectable } from '@angular/core';
import { Song } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private songsList: Song[] = [
    {
      id: 146661,
      title: 'Futuristic Beat',
      author: 'Royalty Free',
      year: 2000,
      album: 'Jupiter',
      genre: ['Advertising', 'Backgroud'],
      label: 'The Free Songs',
      country: 'EEUU',
      duration: 121,
      showDetails: false
    },
    {
      id: 126735,
      title: 'Lifelike',
      author: 'Alexi Action',
      year: 2010,
      album: 'Liverpool concert',
      genre: ['Technology', 'Abstract'],
      label: 'The Free Songs',
      country: 'Germany',
      duration: 144,
      showDetails: false
    },
    {
      id: 136824,
      title: 'Awaken',
      author: 'OYStudio',
      year: 1937,
      album: 'Awaken (Deluxe Edition)',
      genre: ['Calm', 'Cinematic'],
      label: 'Elefant Music',
      country: 'EEUU',
      duration: 180,
      showDetails: false
    },
    {
      id: 140894,
      title: 'Waterfall',
      author: 'Roman Senyk',
      year: 2020,
      album: 'Water',
      genre: ['Atmospheric'],
      label: 'Elefant Music',
      country: 'EEUU',
      duration: 164,
      showDetails: false
    },
    {
      id: 145636,
      title: 'Eco Technology',
      author: 'Lexin',
      year: 2020,
      album: 'The Shadows',
      genre: ['Cinematic', 'Inspiration'],
      label: 'Elefant Music',
      country: 'England',
      duration: 122,
      showDetails: false
    }
  ];

  constructor() { }

  public getSongsList(): Song[] {
    return this.songsList;
  }
}
