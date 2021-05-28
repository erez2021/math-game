import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/services/number.service';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/user'
import {  Router } from '@angular/router';
@Component({
  selector: 'app-minus-ex',
  templateUrl: './minus-ex.component.html',
  styleUrls: ['./minus-ex.component.scss']
})
export class MinusExComponent implements OnInit {

  constructor(private numberService: NumberService, private userService: UserService, private router: Router) { }

  user: User
  public exercise
  public showMsg: string =  'עוד ניסיון אחד'
  public showSolution:string =  'הפתרון הוא'
  public questCounter: number = 1
  public mistakeCounter: number = 0
  public sec: number = 0
public min: number = 0
public isClock: boolean = false
private interval 
  
  
    ngOnInit(): void {
      this.user = JSON.parse(localStorage.getItem('user'))
      console.log(this.user);
      
      this.exercise =  this.numberService.getExercise()
      this.exercise.num2 =  this.numberService.getRandomInt(0,(this.exercise.num1))
      this.exercise.solution = this.exercise.num1-this.exercise.num2
    }
    getSolution(){
  
      if (this.exercise.solution !== this.exercise.answer && this.mistakeCounter === 0){
        this.exercise.isMistake = true
        this.mistakeCounter++
        var audio = new Audio('https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg');
        audio.play() 
      }
       else if(this.mistakeCounter > 0 && this.exercise.solution !== this.exercise.answer){
        this.mistakeCounter++
        this.questCounter++
        var audio = new Audio('https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg');
        audio.play() 
        setTimeout(()=> {
          this.exercise =  this.numberService.getExercise()
          this.exercise.num2 =  this.numberService.getRandomInt(0,(this.exercise.num1))
          this.exercise.solution = this.exercise.num1-this.exercise.num2
        this.mistakeCounter = 0
        },2500)
    
      }
      else {
        this.exercise.isCorrect = true
        this.questCounter++
        this.user.score++
        console.log('questCounter', this.questCounter);
        
        var audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');
        audio.play() 
        setTimeout(()=> {
          this.exercise =  this.numberService.getExercise()
          this.exercise.num2 =  this.numberService.getRandomInt(0,(this.exercise.num1))
          this.exercise.solution = this.exercise.num1-this.exercise.num2
        this.mistakeCounter = 0
        },1000)
      
      }
    console.log(this.questCounter);
    if (this.questCounter > 10) {
      var audio = new Audio('assets/sounds/success1.wav');
        audio.play() 
        clearInterval(this.interval)
      return
    }
    }
    startTime(){
      this.isClock = true
      this.interval = setInterval(() =>{
        this.sec++
        if (this.sec ===60){
          this.sec = 0
          this.min++
        }
      },1000)
    }
    playAgain(){
      window.location.reload()
    }
  
    get msgWrongAns() {
      return this.showMsg
    }
    get smiley() {
      if (this.user.score > 8) return '😀'
      if (this.user.score > 6) return '🙂'
      if (this.user.score > 4) return '😕'
      else return '🙁'
    }
  
}
