import { Component ,OnInit} from '@angular/core';
import {User} from '../../models/user'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
user:User

ngOnInit(): void {
 this.user = JSON.parse(localStorage.getItem('user'))
}

}

