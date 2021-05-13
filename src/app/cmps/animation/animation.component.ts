import { Component, Input, OnInit ,AfterContentInit} from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { User } from 'src/app/models/user';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

@Input() exercise: Exercise
@Input() user: User
data: Array<string> = [
  'assets/icons/1.jpg',
  'assets/icons/1.jpg',
  'assets/icons/1.jpg',
  'assets/icons/1.jpg',
  'assets/icons/2.jpg',
  'assets/icons/2.jpg',
  'assets/icons/2.jpg',
  'assets/icons/3.jpg',
  'assets/icons/3.jpg',
  'assets/icons/3.jpg',
  'assets/icons/3.jpg',
  'assets/icons/3.jpg'
]

  constructor(private numberService: NumberService) { }

  ngOnInit(): void {
 
  }
 

  

 
}