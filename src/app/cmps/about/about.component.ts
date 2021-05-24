import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
isShown: boolean = false
showLine: boolean = false
projects =[]
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    var audio = new Audio('assets/sounds/typing.wav');
    audio.play()
  setTimeout(() =>{
    this.projects = this.projectService.getProjects()
    this.isShown = true
    var audio = new Audio('assets/sounds/appear.wav');
    audio.play()
  },5000)
  setTimeout(() => {
    this.showLine = true
  }, 7000)
  }
  goToUrl(url){
    window.open(url, "_blank")
  }

}

