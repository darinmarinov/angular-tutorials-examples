import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {
  childContent :string = 'I am child Projection content from Projection component'
  constructor() { }

  ngOnInit() {
  }

}
