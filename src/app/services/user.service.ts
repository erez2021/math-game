import { Component } from '@angular/core';
import { Injectable, } from '@angular/core';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
user: User = {
  _id:this._makeId(),
  name: '',
  score: null
}

ngOnInit(): void {

}

getUser() { 
  return this.user
}

saveToStorage(user: User) {
  localStorage.setItem('user', JSON.stringify(user))
 }

private _makeId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
}
