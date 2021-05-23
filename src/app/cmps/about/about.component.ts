import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  i: string = ''
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {

      this.i = 'bla'
    },3000);
  }

}

