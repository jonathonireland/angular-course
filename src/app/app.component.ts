import {AfterViewInit, ChangeDetectionStrategy, Signal, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, Injector, OnInit, QueryList, ViewChild, ViewChildren, signal, computed, effect} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true
})
export class AppComponent  {

  counter = signal(0);

  derivedCounter = computed(() => {
    const counter = this.counter();
    return counter * 10;
  });

  constructor() {
    effect(()=>{
      const counterValue = this.counter();
      const derivedCounterValue = this.derivedCounter();
      console.log(`counter: ${counterValue} derived counter: ${derivedCounterValue}`);
    });
  }

  increment(){
    this.counter.update(val => val + 1);
  }

}
