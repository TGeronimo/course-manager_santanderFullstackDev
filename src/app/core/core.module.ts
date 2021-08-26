import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error-404/error-404.component";

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
   ],
  exports: [
    NavBarComponent
  ],
  providers: [],
})
export class CoreModule {

}
