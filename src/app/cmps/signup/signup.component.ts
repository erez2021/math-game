import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import {User} from '../../models/user'
import {Router} from '@angular/router'
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user: User
  public isDark: boolean=true

  constructor(private userService: UserService ,private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }
  signup() {
    console.log(this.user);
    this.isDark = false
    this.userService.saveToStorage(this.user)
      this.router.navigateByUrl("home")
    }
    get darkOut() {
      return {'light': !this.isDark}
    }
    get flyOut() {
      return {'fly-out' : !this.isDark}
    }
}
