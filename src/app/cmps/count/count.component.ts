import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import {NumberService} from '../../services/number.service'

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  data: Array<object> = [
    {'img':'assets/icons/tree.jpg'},
    {'img':'assets/icons/tree.jpg'},
    {'img':'assets/icons/tree.jpg'},
    {'img':'assets/icons/tree.jpg'},
    {'img':'assets/icons/tree.jpg'},
    {'img':'assets/icons/tree.jpg'},
    {'img':'assets/icons/tree.jpg'},
    {'img':'assets/icons/tree.jpg'},
    {'img':'assets/icons/tree.jpg'},
    {'img':'assets/icons/tree.jpg'},
  
  ]
  public randImgs: Array<object> = []
public exercise: Exercise 
private dataCopy: Array<object> = []
public questCounter: number = 1
  constructor(private numberService: NumberService) { }

  ngOnInit(): void {
this.dataCopy = this.data.slice(0)
    this.randImgs= this.dataCopy.splice(this.numberService.getRandomInt(0,9))
   this.exercise = this.numberService.getKidsExercise()
   this.exercise.solution = this.randImgs.length
  }
  getSolution(){
    if(this.exercise.answer !== this.exercise.solution) {
    this.exercise.isMistake = true
    var audio = new Audio('https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg');
    audio.play() 
  } else {
    this.exercise.isCorrect = true
    this.questCounter++
    var audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');
    audio.play() 
    setTimeout(()=> {
      this.dataCopy = this.data.slice(0)
      this.randImgs= this.dataCopy.splice(this.numberService.getRandomInt(0,9))
     this.exercise = this.numberService.getKidsExercise()
     this.exercise.solution = this.randImgs.length
    },1000)
  }
  if (this.questCounter > 8) {
    var audio = new Audio('assets/sounds/fireworks.mp3');
      audio.play() 
    return
  }
}
}