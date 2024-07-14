import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CourseTitleComponent } from './course-title/course-title.component';

@NgModule({ 
    declarations: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ], 
    providers: [],
    bootstrap: []
})
export class AppModule { }
