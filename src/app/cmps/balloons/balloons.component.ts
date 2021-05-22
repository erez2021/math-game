import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-balloons',
  templateUrl: './balloons.component.html',
  styleUrls: ['./balloons.component.scss']
})
export class BalloonsComponent implements OnInit {

  public prevBalloon: number = 1
  data = [
    { isClicked: false },
    { isClicked: false },
    { isClicked: false },
    { isClicked: false },
    { isClicked: false },
    { isClicked: false },
    { isClicked: false },
    { isClicked: false },
    { isClicked: false },
    { isClicked: false },
    { isClicked: false },

  ]
  isPlaying: boolean = false
  isShown: boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  explodeBalloon(num: number) {
    console.log(num);
    if (num === this.prevBalloon && num !== 10) {
      var audio = new Audio('assets/sounds/pop.mp3');
      audio.play()
      this.data[num].isClicked = true
      this.prevBalloon++
    }
    else if (num === 10 && this.prevBalloon === 10) {
      var audio = new Audio('assets/sounds/fireworks.mp3');
      audio.play()
      this.data[num].isClicked = true
      this.prevBalloon++

    }
  }
  play() {
    this.isPlaying = true
    this.isShown = false
  }
  playVoice(){
    var audio = new Audio('assets/sounds/balloons.wav');
    audio.play() 
  }  
  playAgain(){
    window.location.reload()
 
  }
    }
  

