import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-portfolio-item',
  templateUrl: './list-portfolio-item.component.html',
  styleUrls: ['./list-portfolio-item.component.less']
})
export class ListPortfolioItemComponent implements OnInit {

  @Input() project;

  public keys;
  public projects;

  constructor() { }

  ngOnInit() {
    console.log(this.project.projects);
    this.projects = this.project.projects;
    this.keys = Object.keys(this.projects);
  }

}
