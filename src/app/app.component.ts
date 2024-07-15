import {AfterViewInit, ChangeDetectionStrategy, Signal, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, Injector, OnInit, QueryList, ViewChild, ViewChildren, signal} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true
})
export class AppComponent  {


  counter = signal(0);

  course = signal({
    id:1,
    title: "Angular for Beginners"
  });

  courses = signal([
    "Angular for Beginners",
    "Reactive Angular Course"
  ]);

  constructor() {
  }

  increment(){
    this.counter.update(val => val + 1);

    this.course.set(
      {
        id: 1,
        title: "Hello World"
      }
    );

    this.courses.update(courses => [...courses, "Angular Core Deep Dive"]);
  }


}
