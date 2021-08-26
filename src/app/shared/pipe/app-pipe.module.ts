import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from "./replace.pipe";

@NgModule({
  declarations: [
    ReplacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReplacePipe
  ],
  providers: [],
})
export  class AppPipeModule {

}
