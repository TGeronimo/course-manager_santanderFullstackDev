import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from "./star/star.component";
import { ReplacePipe } from "./pipe/replace.pipe";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error-404/error-404.component";

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { // path: '' indica que vai ativar a rota na raíz da app
        path: '', redirectTo: 'courses', pathMatch: 'full' // este é um objeto de rota
      },
      {
        path: 'courses', component: CourseListComponent // rota de listagem de cursos
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
