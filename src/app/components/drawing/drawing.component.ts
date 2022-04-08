import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';


@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {
  @Input() students: Student[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
