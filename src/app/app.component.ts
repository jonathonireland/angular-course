import {AfterViewInit, ChangeDetectionStrategy, Signal, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, Injector, OnInit, QueryList, ViewChild, ViewChildren, signal, computed, effect, EffectRef} from '@angular/core';
import { NgFor } from '@angular/common';
import { CounterService } from 'src/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true
})
export class AppComponent {

  counter = signal(0);

  derivedCounter = computed(() => {
    const counter = this.counterService.counter();
    return counter * 10;
  });

  effectRef: EffectRef;

  constructor(public counterService: CounterService) {
    
  }

  increment(){
    this.counterService.increment();
  }

}
