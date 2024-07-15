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

  constructor() {
  }

  increment(){
    this.counter.update(val => val + 1);
  }


}
