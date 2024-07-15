import {AfterViewInit, ChangeDetectionStrategy, Signal, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, Injector, OnInit, QueryList, ViewChild, ViewChildren, signal, computed} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true
})
export class AppComponent  {

  counter = signal(0);

  multiplier: number = 0;

  derivedCounter = computed(() => {
    
    const counter = this.counter();

    if(this.multiplier >= 10){
      
      return counter * 10;

    } else {
      return 0;
    }
  });

  increment(){
    this.counter.update(val => val + 1);
  }

  incrementMultiplier() {
    this.multiplier++;
  }
}
