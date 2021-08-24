import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {

    this.course = this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
    // o '+' antes do 'this' converte para number, porém gera o erro "TS2531: Object is possibly 'null'"
    // https://pt.stackoverflow.com/questions/483300/erro-no-typescript-object-is-possibly-null
  }

  save(): void {
    this.courseService.save(this.course);
  }

}
