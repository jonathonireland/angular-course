import {
    AfterContentInit,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
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
		changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges {

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

    ngOnInit() {
		}

    ngOnDestroy(){
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log("ngOnChanges")
    }

    onSaveClicked(description:string) {
      this.courseEmitter.emit({...this.course, description});
    }

		onTitleChanged(newTitle:string){
			this.course.description = newTitle;
		}


}
