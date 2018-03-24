import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cell-elem',
  templateUrl: './cell-elem.component.html',
  styleUrls: ['./cell-elem.component.less']
})

export class CellElemComponent implements OnInit {

  @Input() content;

  constructor() {}

  ngOnInit() {
    console.log(this.content.content);
  }


}
