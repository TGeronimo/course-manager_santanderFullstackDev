import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  courseId: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // o '+' antes do 'this' converte para number, porém gera o erro "TS2531: Object is possibly 'null'"
    // https://pt.stackoverflow.com/questions/483300/erro-no-typescript-object-is-possibly-null

  }

}
