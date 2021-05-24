import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  projects: Array<object>= [
    {
      'title': 'Photogram',
      'img' : 'assets/icons/photogram.jpg',
      'url' : 'https://hershkogram.herokuapp.com/'
    },
    {
      'title': 'Chesstore',
      'img' : 'assets/icons/chesstore.jpg',
      'url' : 'https://erez2021.github.io/chess-store/#/'
    },
    {
      'title': 'Mr.Bitcoin',
      'img' : 'assets/icons/bitcoin.jpg',
      'url' : 'https://erez2021.github.io/new-mister-bitcoin/#/'
    }
  ]

  getProjects() {
    return this.projects
  }
}
