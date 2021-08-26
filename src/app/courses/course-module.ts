import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReplacePipe } from "../pipe/replace.pipe";
// import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from "../star/star.component";
import { CourseListComponent } from "./course-list.component";
import { CourseInfoComponent } from "./course-info.component";



@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    // BrowserModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent // rota de listagem de cursos
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }

    ])
   ],
})
export class CourseModule {

}
