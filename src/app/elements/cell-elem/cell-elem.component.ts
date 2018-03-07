import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import {isEmpty} from "rxjs/operator/isEmpty";

@Component({
  selector: 'app-cell-elem',
  templateUrl: './cell-elem.component.html',
  styleUrls: ['./cell-elem.component.less']
})

export class CellElemComponent implements OnInit {

  @Input() page;

  @Output() isEmpty = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {}

   checkEmpty(status: any) {
      this.cdr.markForCheck();
      this.isEmpty.emit(status);
   }

  ngOnInit() {

    if (this.page.content === 'empty') {
      this.checkEmpty(true);
    } else {
      this.checkEmpty(false);
    }
  }



}
