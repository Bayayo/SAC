import { Component, OnInit } from '@angular/core';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.inicia();
  }

  inicia(){

    var tl = gsap.timeline();

    tl.to(".head-principal", { duration: 0.0, opacity:0, y:-150})
       .to(".head-principal", { duration: 1.5, opacity:1, y:0});

    console.log("NO lo ha hecho")

  }

}
