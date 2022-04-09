import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  linkedinProfile(){
    window.location.href = 'https://www.linkedin.com/in/max-viventsov-b58754206/';
  }

  ngOnInit(): void {
  }

}
