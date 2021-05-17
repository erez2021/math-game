import { Injectable } from '@angular/core';
import {Exercise} from '../models/exercise'



@Injectable({
  providedIn: 'root'
})
export class NumberService {
 public exercise : Exercise
 
  constructor() { }


public getExercise(){
 this.exercise = {
    _id :  this._makeId(),
    num1: this.getRandomInt(0,20),
    num2: this.getRandomInt(0,20),
    num3: 0,
    solution: 0,
    answer: null,
   isCorrect: false,
   isMistake: false
  }
  return this.exercise
}

public getComplexExercise(){
 this.exercise = {
    _id :  this._makeId(),
    num1: this.getRandomInt(2,10),
    num2: this.getRandomInt(2,10),
    num3: this.getRandomInt(3,6),
    solution: 0,
    answer: null,
   isCorrect: false,
   isMistake: false
  }
  return this.exercise
}

public getKidsExercise() {
  this.exercise = {
    _id :  this._makeId(),
    num1: 0,
    num2: 0,
    num3: 0,
    solution: 0,
    answer: null,
   isCorrect: false,
   isMistake: false
  }
  return this.exercise
}

private _makeId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

getRandomInt(min: number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
