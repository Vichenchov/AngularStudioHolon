import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moms-drawings',
  templateUrl: './moms-drawings.component.html',
  styleUrls: ['./moms-drawings.component.css']
})
export class MomsDrawingsComponent implements OnInit {
  img1 = 'assets/images/PHOTO-2021-12-21-16-46-05 (1).jpg'
  img2 = 'assets/images/PHOTO-2021-12-21-16-46-05 (1).jpg'
  
  constructor() { }

  ngOnInit(): void {
  }

}
