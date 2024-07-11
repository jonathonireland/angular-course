import {
  AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Inject,
    InjectionToken,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    QueryList,
    Self,
    SimpleChanges,
    SkipSelf,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import {CoursesService} from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements 
OnInit, 
OnDestroy, 
OnChanges, 
AfterContentChecked, 
AfterViewChecked,
AfterContentInit,
AfterViewInit,
DoCheck {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    /* 
      1
    */
    constructor(
    	private coursesService: CoursesService,
			@Attribute('type') private type: string
    ) {
    }
    
    /* 
      2 
      change detection lifecycle hook
    */
    ngOnChanges(changes: SimpleChanges) {
    }

    /* 
      3 
      called once 
    */
    ngOnInit() {
		}

    /* 
      4 
      A place to run any custom change detection 
      implementations used in rare ocasions. 
    */
    ngDoCheck(){
      // console.log("ngDoCheck");
    }

    /* 
      5 
      - called once
      - best used for content projection
      - change detection lifecycle hook
      @ContentChild (or) 
      @ContentChildren 
    */
    ngAfterContentInit(){
      // throw new Error('Method not implemented.');
    }
    
    /* 
      6 
      called once
      @ViewChild (or) 
      @ViewChildren 
      change detection lifecycle hook 
    */
    ngAfterViewInit() {
      
    }
    
  
    /* 
      last lifecycle hook
      used to release or unsubscribe from
      observables that the component is using
      but the gest way to subscribe is by using an async pipe
    */
    ngOnDestroy(){
    }

 
    /* 
      change detection lifecycle hook
    */
    ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked");

      this.course.description = 'ngAfterContentChecked';

      this.course.category = "ADVANCED";

      //this.course.iconUrl = '';
    }

    /*
      called for making changes to 
      the DOM 
    */
    ngAfterViewChecked(){
      // console.log('ngAfterViewChecked');
    }

    onSaveClicked(description:string) {
      this.courseEmitter.emit({...this.course, description});
    }

		onTitleChanged(newTitle:string){
			this.course.description = newTitle;
		}


}
