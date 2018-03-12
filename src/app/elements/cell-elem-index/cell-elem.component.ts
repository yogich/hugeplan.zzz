import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cell-elem',
  templateUrl: './cell-elem.component.html',
  styleUrls: ['./cell-elem.component.less']
})

export class CellElemComponent implements OnInit {

  @Input() content;

  @Output() contentStatus = new EventEmitter<boolean>();

  constructor() {}

  checkStatus(status: any) {
      this.contentStatus.emit(status);
  }

  ngOnInit() {
    //console.log(this.page.content);

    if (this.content.content === 'false') {
      this.checkStatus(false);
    } else {
      this.checkStatus(true);
    }
  }


}
