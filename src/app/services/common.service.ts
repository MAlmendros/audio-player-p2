import { Injectable } from '@angular/core';
import { Song } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private songsList: Song[] = [
    {
      id: 1,
      title: 'Break My Heart',
      author: 'Dua Lipa',
      year: 1997,
      album: 'Elegants',
      genre: 'Funky',
      label: 'Label',
      country: 'EEUU',
      showDetails: false
    },
    {
      id: 2,
      title: 'Levitating',
      author: 'Dua Lipa',
      year: 1967,
      album: 'Liverpool concert',
      genre: 'Pop',
      label: 'Label',
      country: 'EEUU',
      showDetails: false
    },
    {
      id: 3,
      title: 'Love Again',
      author: 'Dua Lipa',
      year: 1937,
      album: 'The Three Degrees',
      genre: 'Funk',
      label: 'Label',
      country: 'EEUU',
      showDetails: false
    },
    {
      id: 4,
      title: 'Boys Will Be Boys',
      author: 'Dua Lipa',
      year: 2020,
      album: 'Future Nostalgia',
      genre: 'Funk',
      label: 'Label',
      country: 'EEUU',
      showDetails: false
    },
    {
      id: 5,
      title: 'Pretty Please',
      author: 'Dua Lipa',
      year: 2020,
      album: 'Future Nostalgia',
      genre: 'Funk',
      label: 'Label',
      country: 'EEUU',
      showDetails: false
    }
  ];

  constructor() { }

  public getSongsList(): Song[] {
    return this.songsList;
  }
}
