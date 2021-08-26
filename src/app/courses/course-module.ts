import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseListComponent } from "./course-list.component";
import { CourseInfoComponent } from "./course-info.component";



@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ],
  imports: [
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
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
