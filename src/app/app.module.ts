import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CourseModule } from "./courses/course-module";

import { AppComponent } from './app.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { Error404Component } from "./error-404/error-404.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' // este é um objeto de rota
      }, // path: '' indica que vai ativar a rota na raíz da app
      {
        path: '**', component: Error404Component
      }
    ]),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
