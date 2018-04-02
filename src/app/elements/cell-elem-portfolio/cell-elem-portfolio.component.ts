import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell-elem-portfolio',
  templateUrl: './cell-elem-portfolio.component.html',
  styleUrls: ['./cell-elem-portfolio.component.less']
})

export class CellElemPortfolioComponent implements OnInit {

  @Input() content;

  public scroll;

  constructor() {}

  ngOnInit() {
  }

}
