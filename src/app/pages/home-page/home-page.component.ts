import { Component } from '@angular/core';
import {User} from '../../models/user'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {

  constructor() { }
user:User

}
