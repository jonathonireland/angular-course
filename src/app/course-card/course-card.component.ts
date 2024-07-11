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


    constructor(
    	private coursesService: CoursesService,
			@Attribute('type') private type: string
    ) {
    }
    
    
    
    ngAfterViewInit(): void {
      throw new Error('Method not implemented.');
    }
    
    ngAfterContentInit(): void {
      throw new Error('Method not implemented.');
    }

    ngOnInit() {
		}

    ngDoCheck(): void {
      console.log("ngDoCheck");
    }

    ngOnDestroy(){
    }

    ngOnChanges(changes: SimpleChanges) {
    }

    ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked");

      this.course.description = 'ngAfterContentChecked';

      this.course.category = "ADVANCED";

      //this.course.iconUrl = '';
    }

    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
    }

    onSaveClicked(description:string) {
      this.courseEmitter.emit({...this.course, description});
    }

		onTitleChanged(newTitle:string){
			this.course.description = newTitle;
		}


}
