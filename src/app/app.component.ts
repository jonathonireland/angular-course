import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, Injector, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {HighlightedDirective} from './courses/directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './courses/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';
import { createCustomElement } from '@angular/elements';
import { CourseTitleComponent } from './course-title/course-title.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    NgFor
  ],
  standalone:true
})
export class AppComponent implements OnInit {


  courses : Course[] = COURSES;

  performPrefetch: boolean = false;

  display: boolean = false;

  coursesTotal = this.courses.length;

  
  //courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject (CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector) {
  }

  ngOnInit() {
    const htmlElement = createCustomElement(CourseTitleComponent,{injector:this.injector});
    customElements.define('course-title',htmlElement);
  }


  onEditCourse(){

    const course = this.courses[0];

    const newCourse = {
      ...course,
      description: 'ngOnChanges'
    };
    this.courses[0] = newCourse;

  }

  save(course:Course){
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!')
      );
  }

  onPrefetch() {
    this.performPrefetch = true;
  }

  onDisplay() {
    this.display = true;
  }

}
