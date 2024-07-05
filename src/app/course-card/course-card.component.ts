import { Component, ElementRef, QueryList, OnInit, Input, EventEmitter, Output, ContentChildren, AfterViewInit, TemplateRef } from '@angular/core';
import {COURSES} from '../../db-data';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input()
  course: Course;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>(); 


  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<CourseImageComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
   
  }

  isImageVisable(){
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component - button clicked...");

    this.courseEmitter.emit(this.course);
  }

  cardClasses(){
    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
  }

  cardStyles(){
    return {'background-image': 'url('+ this.course.iconUrl +')'};
  }

}
