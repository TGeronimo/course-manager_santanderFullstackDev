import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
   ],
  exports: [
    NavBarComponent
  ],
  providers: [],
})
export class CoreModule {

}
